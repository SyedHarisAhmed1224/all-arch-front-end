'use client'

import ClientServicesCard, { ClientServicesCardType } from '../ClientServicesCards/ClientServicesCard'
import { useEffect, useState } from 'react'
import ServiceAgreement from '../ServiceAgreement/ServiceAgreement'
import ProjectOnboarding from '../ProjectOnboarding/ProjectOnboarding'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import { useProjectStore } from '@/app/stores/useProjectStore'
import { useContractStore } from '@/app/stores/useContractStore'
import toast from 'react-hot-toast'
import { ClientService } from '@/app/services/Client/ClientService'
import { useRouter } from 'next/navigation'

interface ClientServicesSelectionProps {
    clientServicesCardsInfo: ClientServicesCardType[]
}

const ClientServicesSelection: React.FC<ClientServicesSelectionProps> = ({ clientServicesCardsInfo }) => {

    const [selectedServices, setSelectedServices] = useState<number[]>([])
    const [showContract, setShowContract] = useState<boolean>(false)
    const [showOnBoarding, setShowOnBoarding] = useState<boolean>(false)

    const { updateContractBody, resetContractBody } = useContractStore()
    const contractBody = useContractStore(state => state.contractBody)
    const { resetSelections } = useProjectStore()

    const router = useRouter()

    const initializePrices = useProjectStore(
        (state) => state.initializePrices
    )

    useEffect(() => {
        initializePrices(clientServicesCardsInfo)
    }, [clientServicesCardsInfo, initializePrices])

    const modifyServices = (serviceID: number) => {
        setSelectedServices(prev =>
            prev.includes(serviceID)
                ? prev.filter(id => id !== serviceID)
                : [...prev, serviceID]
        )
    }

    const toggleContract = () => {
        setShowContract(!showContract)
    }

    const toggleOnBoarding = () => {
        setShowOnBoarding(!showOnBoarding)
    }

    const acceptContract = (researchSupportAgreement: boolean) => {
        setShowContract(!showContract)
        setShowOnBoarding(!showOnBoarding)

        resetContractBody()

        updateContractBody({
            researchSupportAgreement: researchSupportAgreement ? 1 : 0
        })

        resetSelections()
    }

    const onComplete = async () => {
        try {
            const res: BackendResponse | null = await ClientService.lodgeNewContractRequest(contractBody)

            if (!res) {
                toast.error('Server Error')
                return
            }

            if (res.responseCode === 200) {
                const contractId: number = res.body
                toast.success('Success')
                setTimeout(() => {
                    router.push(`/client-portal/view-contracts/${contractId}`)
                }, 2000)
            }
            else {
                toast.error(res.body)
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.')
            console.error(error)
        }
    }

    return (
        <div className='w-full h-full'>

            {
                showContract && clientServicesCardsInfo && (
                    <ModalWrapper>
                        <ServiceAgreement
                            onAccept={acceptContract}
                            selectedServices={selectedServices}
                            onClose={toggleContract}
                            clientServicesCardsInfo={clientServicesCardsInfo}
                        />
                    </ModalWrapper>
                )
            }

            {
                showOnBoarding && (
                    <ModalWrapper>
                        <ProjectOnboarding
                            onComplete={onComplete}
                            onClose={toggleOnBoarding}
                            selectedServices={selectedServices}
                        />
                    </ModalWrapper>
                )
            }

            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {clientServicesCardsInfo && clientServicesCardsInfo.map(
                    (cardInfo: ClientServicesCardType) => (
                        <div key={cardInfo.serviceId} className='w-full'>
                            <ClientServicesCard
                                onClick={modifyServices}
                                serviceID={cardInfo.serviceId}
                                cardInfo={cardInfo}
                            />
                        </div>
                    )
                )}
            </div>

            {
                selectedServices.length <= 0 ?
                    <div className='w-full text-center text-black opacity-70 text-[0.90rem] mt-7'>
                        Select the services you need above
                    </div>
                    :
                    <div className='w-full text-center text-black text-[0.90rem] mt-7'>
                        <span className='font-bold text-(--client-text-green)'>{selectedServices.length} service selected</span><span className='opacity-70'> — click Continue when ready</span>
                    </div>
            }

            <button onClick={toggleContract}
                className={`${selectedServices.length <= 0 ? 'bg-[#DDD8D0] border-gray-300 cursor-not-allowed ' : 'bg-(--client-text-green) text-white border-(--client-text-green) transition ease-in-out duration-200 hover:bg-(--client-text-green-hover) cursor-pointer'} w-full border rounded-3xl py-3 font-semibold text-black mt-7`}>
                <span className={`${selectedServices.length <= 0 ? 'opacity-60' : ''}`}>Continue to Contract →</span>
            </button>
        </div>
    )
}

export default ClientServicesSelection
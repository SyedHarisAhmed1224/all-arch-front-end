'use client'

import ClientServicesCard, { ClientServicesCardType } from '../ClientServicesCards/ClientServicesCard'
import { ClientServicesCardsInfo } from '../../../constants/ClientPortalData'
import { useState } from 'react'
import ServiceAgreement from '../ServiceAgreement/ServiceAgreement'
import ProjectOnboarding from '../ProjectOnboarding/ProjectOnboarding'
import ModalWrapper from '../ModalWrapper/ModalWrapper'

const ClientServicesSelection: React.FC = () => {
    const [selectedServices, setSelectedServices] = useState<number[]>([])
    const [showContract, setShowContract] = useState<boolean>(false)
    const [showOnBoarding, setShowOnBoarding] = useState<boolean>(false)

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

    const acceptContract = () => {
        setShowContract(!showContract)
        setShowOnBoarding(!showOnBoarding)
    }

    return (
        <div className='w-full h-full'>

            {
                showContract && (
                    <ModalWrapper>
                        <ServiceAgreement
                            onAccept={acceptContract}
                            selectedServices={selectedServices}
                            onClose={toggleContract}
                        />
                    </ModalWrapper>
                )
            }

            {
                showOnBoarding && (
                    <ModalWrapper>
                        <ProjectOnboarding
                            onClose={toggleOnBoarding}
                            selectedServices={selectedServices}
                        />
                    </ModalWrapper>
                )
            }

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ClientServicesCardsInfo.map(
                    (cardInfo: ClientServicesCardType, index: number) => (
                        <div key={index} className="w-full">
                            <ClientServicesCard
                                onClick={modifyServices}
                                serviceID={index}
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
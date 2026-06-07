'use client'

import ClientServicesCard, { ClientServicesCardType } from '../ClientServicesCards/ClientServicesCard'
import { ClientServicesCardsInfo } from '../../../constants/ClientPortalData'
import { useState } from 'react'
import ServiceAgreement from '../ServiceAgreement/ServiceAgreement'
import ProjectOnboarding from '../ProjectOnboarding/ProjectOnboarding'

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
                showContract &&
                <div>
                    <div className='fixed w-screen h-screen left-0 top-0 bg-black opacity-80 z-10'></div>

                    <div className='fixed w-screen h-screen left-0 top-0 z-20 flex items-center justify-center'>
                        <div className='w-150 h-fit'>
                            <ServiceAgreement onAccept={acceptContract} selectedServices={selectedServices} onClose={toggleContract} />
                        </div>
                    </div>
                </div>
            }

            {
                showOnBoarding &&
                <div>
                    <div className='fixed w-screen h-screen left-0 top-0 bg-black opacity-80 z-10'></div>

                    <div className='fixed w-screen h-screen left-0 top-0 z-20 flex items-center justify-center'>
                        <div className='w-150 h-fit'>
                            <ProjectOnboarding onClose={toggleOnBoarding} />
                        </div>
                    </div>
                </div>
            }

            <div className='flex flex-wrap items-center gap-5 w-full h-fit'>
                {
                    ClientServicesCardsInfo.map((cardInfo: ClientServicesCardType, index: number) => {
                        return (
                            <div className='w-65 h-55' key={index}>
                                <ClientServicesCard onClick={modifyServices} serviceID={index} cardInfo={cardInfo} />
                            </div>
                        )
                    })
                }
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
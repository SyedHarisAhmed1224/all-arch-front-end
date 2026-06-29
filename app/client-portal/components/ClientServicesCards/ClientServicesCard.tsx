'use client'

import { useState } from 'react'

export interface ClientServicesCardType {
    serviceId: number
    icon: string
    title: string
    info: string
    type: 'Core' | 'Optional' | 'Clinical'
    amount: number
}

interface ClientServicesCardProps {
    serviceID: number
    cardInfo: ClientServicesCardType
    onClick: (serviceID: number) => void
}

const ClientServicesCard: React.FC<ClientServicesCardProps> = ({ serviceID, cardInfo, onClick }) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const onCardClick = () => {
        setIsActive(!isActive)
        onClick(serviceID)
    }

    return (
        <div onClick={onCardClick} className={`${isActive ? 'bg-[#ECFDF5] border-[#059669] ' : 'bg-white border-gray-300 '} w-full h-full rounded-2xl border flex flex-col items-start py-3 px-3 cursor-pointer transition duration-200 ease-in-out hover:border-[#059669] hover:-translate-y-1 hover:shadow-2xl`}>
            <div className='w-full h-fit flex items-center justify-end'>
                <div className={`${isActive ? 'bg-[#059669] text-white border-[#059669]' : 'bg-white border-gray-300 '} w-5 h-5 rounded-2xl border-2 flex items-center justify-center text-[0.7rem]`}>✓</div>
            </div>
            <div className='h-fit px-3'>
                <div className='text-[1.6rem]'>{cardInfo.icon}</div>
                <div className='font-semibold mt-2'>{cardInfo.title}</div>
                <div className='text-[0.8rem] text-black opacity-60 mt-2'>{cardInfo.info}</div>
                <div
                    className={`text-[0.7rem] font-bold rounded-2xl py-0.5 px-2 mt-3 w-fit 
                    ${cardInfo.type === 'Core' ? ' bg-[#DBEAFE]  text-[#1E40AF] ' : cardInfo.type === 'Optional' ? ' bg-[#EDE8E0] text-[#6B6B6B] opacity-80 ' : ' bg-[#EDE9FE] text-[#4C1D95] '}}`}
                >
                    {cardInfo.type}
                </div>
            </div>
        </div>
    )
}

export default ClientServicesCard
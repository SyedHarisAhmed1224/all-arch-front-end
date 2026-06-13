'use client'

import { ClientServicesCardsInfo } from '@/app/constants/ClientPortalData'
import { useEffect, useState } from 'react'

interface ServiceAgreementProps {
    onClose: () => void
    selectedServices: number[]
    onAccept: () => void
}

const ServiceAgreement: React.FC<ServiceAgreementProps> = ({ onClose, selectedServices, onAccept }) => {
    const [fullName, setFullName] = useState<string>('')
    const [signature, setSignature] = useState<string>('')
    const [agreedToServices, setAgreedToServices] = useState<boolean>(false)
    const [agreeButton, setAgreeButton] = useState<boolean>(false)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value)
    }

    const handleSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignature(e.target.value)
    }

    const handleAgreedToServicesChange = () => {
        setAgreedToServices(!agreedToServices)
    }

    useEffect(() => {
        setAgreeButton(
            fullName.trim().length > 0 &&
            signature.trim().length > 0 &&
            agreedToServices
        )
    }, [fullName, signature, agreedToServices])

    return (
        <div className='w-full md:w-[70vw] lg:w-[30vw] xl:w-[30vw] h-fit bg-white rounded-3xl overflow-x-hidden'>
            <div style={{ background: 'linear-gradient(135deg, var(--client-gradient-one), var(--client-gradient-two))' }} className='flex flex-col py-7 px-7 gap-3'>
                <div className='w-full h-fit flex items-center justify-between'>
                    <span className='w-fit uppercase py-1 px-3 rounded-[20px] bg-[rgba(52,211,153,.15)] text-(--client-top-bar-text-color) border border-(--client-top-bar-text-border-color) font-semibold text-[0.8rem]'>📜 Service Agreement</span>

                    <button onClick={onClose} className='cursor-pointer w-fit h-fit rounded-3xl bg-[rgba(255,255,255,.1)] text-white py-1 px-2 text-[0.8rem] flex justify-center items-center'>✕</button>
                </div>
                <div className='font-["lora"] text-[1.4rem] font-semibold text-white tracking-normal'>
                    ALLARCH Research Contract
                </div>
                <div className='text-white opacity-50 text-[0.8rem]'>
                    Please read all terms before signing
                </div>
            </div>

            <div className='w-full max-h-[60vh] lg:max-h-[70vh] xl:max-h-[70vh] flex flex-col py-6 px-8 gap-5 overflow-auto'>
                <div className='w-full h-fit bg-[#ECFDF5] border border-[#A7F3D0] py-3 px-4 rounded-2xl text-[0.9rem]'>
                    <span className='font-semibold text-(--client-text-green-hover)'>{selectedServices.length === 1 ? 'Selected Service: ' : 'Selected Services: '}</span>
                    {
                        selectedServices.map((id, index) => {
                            return (
                                index === (selectedServices.length - 1) ?
                                    <span key={index}>{ClientServicesCardsInfo[id].title}</span> :
                                    <span key={index}>{ClientServicesCardsInfo[id].title}, </span>
                            )
                        })
                    }
                </div>
                <div className='w-full h-fit bg-[#F5F0EB] border border-gray-300 py-3 px-4 rounded-2xl text-[0.9rem] flex flex-col gap-2'>
                    <div className='font-semibold'>🗓️ Delivery Timeline</div>
                    <div className='text-black opacity-70'>Timelines may vary by <span className='font-bold'>±2 to 3 days</span> due to operational or ethical review processes. You will be notified via email and your project dashboard.</div>
                </div>

                <div className='w-full h-fit bg-[#F5F0EB] border border-gray-300 py-3 px-4 rounded-2xl text-[0.9rem] flex flex-col gap-2'>
                    <div className='font-semibold'>💳 Payment Terms</div>
                    <div className='text-black opacity-70'><span className='font-bold'>50% advance required</span> before work begins. Remaining <span className='font-bold'>50% due on delivery.</span> Work begins only after advance is confirmed.</div>
                </div>

                <div className='w-full h-fit bg-[#FFF7ED] border border-[#FED7AA] py-3 px-4 rounded-2xl text-[0.9rem] flex flex-col gap-2'>
                    <div className='font-semibold'>🔒 Data Confidentiality & Breach Penalty</div>
                    <div className='text-[#92400E] opacity-90'>All data is strictly confidential. Any verified breach by either party results in a <span className='font-bold'>hefty financial penalty</span> following formal investigation.</div>
                </div>

                <div className='w-full h-fit bg-[#F5F0EB] border border-gray-300 py-3 px-4 rounded-2xl text-[0.9rem] flex flex-col gap-2'>
                    <div className='font-semibold'>📊 Progress Reporting</div>
                    <div className='text-black opacity-70'>Project milestones are tracked on your <span className='font-bold'>project dashboard</span> in real time. Email updates are sent at each major milestone</div>
                </div>

                <div className='w-full h-fit bg-[#F5F0EB] border border-gray-300 py-3 px-4 rounded-2xl text-[0.9rem] flex gap-2'>
                    <div>
                        <input type="checkbox" />
                    </div>
                    <div className='text-black opacity-70'>
                        <label htmlFor="optional_service_agreement">I agree to acknowledge ALLARCH Academy as the research support provider in any published work. (Optional)</label>
                    </div>
                </div>

                <div className='w-full h-fit bg-[#111] border border-gray-300 py-4 px-4 rounded-2xl text-[0.9rem] flex flex-col gap-5'>
                    <div className='text-white opacity-40 font-semibold uppercase text-[0.7rem]'>Agreement & Signature</div>
                    <div className='flex items-center justify-between text-white gap-3 flex-wrap xl:flex-nowrap'> 
                        <div className='flex flex-col w-full gap-2'>
                            <label htmlFor="full_name" className='uppercase text-[0.8rem] opacity-40 font-semibold'>Full Name</label>
                            <input onChange={handleNameChange} className='text-white bg-[rgba(255,255,255,.07)] rounded-xl py-2 px-3 border border-gray-500 outline-0 focus:border-(--input-text-green-hover)' type="text" placeholder='Your full name' />
                        </div>

                        <div className='flex flex-col w-full gap-2'>
                            <label htmlFor="digital_signature" className='uppercase text-[0.8rem] opacity-40 font-semibold'>DIGITAL SIGNATURE</label>
                            <input onChange={handleSignatureChange} className='text-white bg-[rgba(255,255,255,.07)] rounded-xl py-2 px-3 border border-gray-500 outline-0 focus:border-(--input-text-green-hover) placeholder:italic placeholder:font-["lora"] font-["lora"]' type="text" placeholder='Sign here' />
                        </div>
                    </div>
                    <div className='text-white bg-[rgba(255,255,255,.07)] w-full h-fit py-5 px-5 flex flex-col gap-1 rounded-2xl'>
                        <div className='text-white opacity-40 uppercase text-[0.7rem] font-semibold tracking-wide'>Date of Agreement — Islamic Calendar (No Gregorian)</div>
                        <div className='text-[#34D399] font-semibold text-[1rem]'>22 Dhu al-Hijjah 1447 AH</div>
                        <div className='w-full text-end opacity-40 text-[0.8rem] font-["lora"]'>٢٢ ذو الحجة ١٤٤٧ هـ</div>
                        <div className='text-[0.6rem] opacity-20'>Gregorian calendar is not used per ALLARCH policy.</div>
                    </div>

                    <div className='flex gap-3 text-[0.8rem] text-white justify-center items-center'>
                        <input onChange={handleAgreedToServicesChange} type="checkbox" />
                        <label htmlFor="service_agreement" className='opacity-40'>I have read, understood, and agree to all terms and conditions in this contract.</label>
                    </div>

                    <button onClick={() => { if (agreeButton) onAccept() }} className={`${agreeButton ? 'bg-[#059669] text-white cursor-pointer' : 'bg-[#DDD8D0] text-[#6B6B6B] cursor-not-allowed'} transition duration-200 ease-in-out w-full h-fit font-semibold text-[1rem] py-3 rounded-3xl`}>Sign & Accept Agreement →</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceAgreement
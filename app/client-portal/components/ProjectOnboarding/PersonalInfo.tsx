'use client'

import { useContractStore } from '@/app/stores/useContractStore'
import { ProjectOnboardServiceData } from '@/app/types/ProjectOnboardingData'
import { useEffect, useState } from 'react'

interface PersonalInfoProps {
    onContinue: (serviceData: ProjectOnboardServiceData) => void
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onContinue }) => {
    const [fullName, setFullName] = useState<string>('')
    const [degree, setDegree] = useState<string>('')
    const [field, setField] = useState<string>('')
    const [continueButton, setContinueButton] = useState<boolean>(false)

    const { updateContractBody } = useContractStore()

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value.trim())
    }

    const handleDegreeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDegree(e.target.value.trim())
    }

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setField(e.target.value.trim())
    }

    useEffect(() => {
        setContinueButton(
            fullName.trim().length > 0 &&
            degree.trim().length > 0 &&
            field.trim().length > 0
        )
    }, [fullName, degree, field])

    const handleContinue = () => {
        if (continueButton) {
            const data: ProjectOnboardServiceData = {
                id: 1,
                icon: '👤',
                title: 'Scholar',
                info: [fullName, degree, field].join(' . '),
                status: 'confirm'
            }

            updateContractBody({
                personalInfoFullName: fullName,
                qualificationID: 1,
                fieldDescription: field
            })

            onContinue(data)
        }
    }

    return (
        <div className='w-full h-fit flex flex-col gap-5 px-7 py-5'>
            <div className='flex flex-col gap-1 text-(--custom-text-color)'>
                <span className='text-[1.5rem]'>👤</span>
                <span className='font-bold'>Tell us about yourself</span>
                <span className='text-[0.9rem] opacity-70'>Your details for the project file</span>
            </div>

            <div className='w-full h-fit bg-[#F5F0EB] flex flex-col py-3 px-4 rounded-2xl gap-2 border border-gray-300 shadow'>
                <span className='uppercase font-semibold text-[0.75rem] opacity-80'>Full Name / Scholar Name</span>
                <input onChange={handleNameChange} placeholder='Dr. Ahmed Khan' type="text" className='w-full bg-white text-(--custom-text-color) py-1 px-3 outline-0 rounded-lg text-[0.9rem] border border-gray-300 transition duration-200 ease-in-out focus:border-(--input-text-green-hover)' />
            </div>

            <div className='w-full h-fit bg-[#F5F0EB] flex flex-col py-3 px-4 rounded-2xl gap-2 border border-gray-300 shadow'>
                <span className='uppercase font-semibold text-[0.75rem] opacity-80'>Degree / Qualification</span>

                <select onChange={handleDegreeChange} className='w-full bg-white text-(--custom-text-color) py-1 px-3 outline-0 rounded-lg text-[0.9rem] border border-gray-300 transition duration-200 ease-in-out focus:border-(--input-text-green-hover)'>
                    <option value="">Select degree...</option><option>MBBS</option><option>BDS</option><option>BSc</option><option>MSc</option><option>MPhil</option><option>PhD</option><option>MD</option><option>Other</option>
                </select>
            </div>

            <div className='w-full h-fit bg-[#F5F0EB] flex flex-col py-3 px-4 rounded-2xl gap-2 border border-gray-300 shadow'>
                <span className='uppercase font-semibold text-[0.75rem] opacity-80'>Field / Speciality</span>
                <input onChange={handleFieldChange} placeholder='e.g. Cardiology, Public Health...' type="text" className='w-full bg-white text-(--custom-text-color) py-1 px-3 outline-0 rounded-lg text-[0.9rem] border border-gray-300 transition duration-200 ease-in-out focus:border-(--input-text-green-hover)' />
            </div>

            <button onClick={handleContinue} className={`${continueButton ? 'bg-[#059669] text-white cursor-pointer' : 'bg-[#DDD8D0] text-[#6B6B6B] cursor-not-allowed'} mt-2 transition duration-200 ease-in-out w-full h-fit font-semibold text-[1rem] py-2 rounded-3xl`}>Continue →</button>
        </div>
    )
}

export default PersonalInfo
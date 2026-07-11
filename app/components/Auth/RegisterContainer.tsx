'use client'

import toast from 'react-hot-toast'
import FieldSelect, { FieldData } from '../FieldSelect/FieldSelect'
import InputField from '../InputField/InputField'
import { useEffect, useState } from 'react'
import { LandingPageService } from '@/app/services/LandingPage/LandingPageService'
import { useRouter } from 'next/navigation'
import { AuthService } from '@/app/services/Auth/AuthService'

interface RegisterContainerProps {
    onSubTextClick: () => void
}

const RegisterContainer: React.FC<RegisterContainerProps> = ({ onSubTextClick }) => {
    const router = useRouter()

    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [interestField, setInterestField] = useState<number>(-1)
    const [password, setPassword] = useState<string>()

    const [interestFieldData, setInterestFieldData] = useState<FieldData[]>()

    useEffect(() => {
        const getFieldData = async () => {
            const res = await LandingPageService.getInterestFields()

            if (res && res.responseCode === 200) {
                const formattedData: FieldData[] = res.body.map((item: any) => ({
                    key: item.FieldID,
                    value: item.FieldName
                }))

                setInterestFieldData(formattedData)
            }
        }

        getFieldData()
    }, [])

    const handleInterestFieldChange = (value: number) => {
        setInterestField(value)
    }

    const handleFirstNameChange = (value: string) => {
        setFirstName(value)
    }

    const handleLastNameChange = (value: string) => {
        setLastName(value)
    }

    const handleEmailChange = (value: string) => {
        setEmail(value)
    }

    const handlePasswordNameChange = (value: string) => {
        setPassword(value)
    }

    const handleRegister = async () => {
        if (!email || !firstName || !lastName || !password || interestField === -1) {
            toast.error('Please fill all details')
            return
        }

        const details: RegisterDetails = {
            emailAddress: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            interestFieldID: interestField
        }

        try {
            const res: BackendResponse | null = await AuthService.register(details)

            if (!res) {
                toast.error('Server Error')
                return
            }

            if (res.responseCode === 200) {
                router.push('/client-portal')
            } else {
                toast.error(res.body || 'Register failed')
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.')
            console.error(error)
        }
    }

    return (
        <div>
            <div className='w-full flex flex-col items-center justify-between px-5 gap-4 py-5'>
                <div className='w-full h-fit flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5'>
                    <InputField label='First Name' placeholder='e.g. Ahmed' onChange={handleFirstNameChange} />

                    <InputField label='Last Name' placeholder='e.g. Khan' onChange={handleLastNameChange} />
                </div>

                <InputField label='Email Address' placeholder='you@example.com' type='email' onChange={handleEmailChange} />

                <FieldSelect fields={interestFieldData} label='Field of Interest' onChange={handleInterestFieldChange} />

                <InputField label='Password' placeholder='Min. 8 characters' type='password' onChange={handlePasswordNameChange} />
            </div>

            <div className='w-full flex flex-col items-center justify-between px-5 gap-4 py-3'>
                <button onClick={handleRegister} className='w-full bg-(--custom-text-red) transition duration-300 ease-in-out hover:bg-red-700 cursor-pointer rounded-3xl py-2.5 font-semibold text-white text-[1rem]'>Create Account →</button>
                <div className='text-[0.85rem] md:text-[0.9rem] text-center'>
                    <span className='text-(--custom-text-color) opacity-70'>Already have an account? </span><span onClick={onSubTextClick} className='text-(--custom-text-red) font-semibold cursor-pointer'>Log in here</span>
                </div>
            </div>
        </div>
    )
}

export default RegisterContainer
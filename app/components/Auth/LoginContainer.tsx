'use client'

import { useState } from 'react'
import InputField from '../InputField/InputField'
import { AuthService } from '@/app/services/Auth/AuthService'
import toast from 'react-hot-toast'

interface LoginContainerProps {
    onSubTextClick: () => void
}

const LoginContainer: React.FC<LoginContainerProps> = ({ onSubTextClick }) => {
    const [emailAddress, setEmailAddres] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmailChange = (val: string) => {
        if (!val || val === '') {
            return
        }
        setEmailAddres(val)
    }

    const handlePasswordChange = (val: string) => {
        if (!val || val === '') {
            return
        }
        setPassword(val)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const credentials: LoginCredentials = {
            emailAddress: emailAddress,
            password: password
        }

        try {
            const res: BackendResponse = await AuthService.login(credentials)

            if (res.responseCode === 200) {
                toast.success('Success')
            } else {
                toast.error(res.body || 'Login failed')
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.')
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-col items-center justify-between px-5 gap-4 py-5'>
                <InputField onChange={handleEmailChange} label='Email Address' placeholder='you@example.com' type='email' />

                <InputField onChange={handlePasswordChange} label='Password' placeholder='Min. 8 characters' type='password' />
            </div>

            <div className='w-full flex flex-col items-center justify-between px-5 gap-4 py-3'>
                <button type='submit' className='w-full bg-(--custom-text-red) transition duration-300 ease-in-out hover:bg-red-700 cursor-pointer rounded-3xl py-2.5 font-semibold text-white text-[1rem]'>Log In →</button>
                <div className='text-[0.9rem]'>
                    <span className='text-(--custom-text-color) opacity-70'>No account? </span><span onClick={onSubTextClick} className='text-(--custom-text-red) font-semibold cursor-pointer'>Sign up free</span>
                </div>
            </div>
        </form>
    )
}

export default LoginContainer
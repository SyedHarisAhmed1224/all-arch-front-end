'use client'

import { useState } from 'react'
import SubTitle from '../SubTitle/SubTitle'
import RegisterContainer from './RegisterContainer'
import LoginContainer from './LoginContainer'

interface AuthContainerProps {
    authType: 'login' | 'register'
    toggleAuth: () => void
}

const AuthContainer: React.FC<AuthContainerProps> = ({ authType, toggleAuth }) => {
    const [selectedAuth, setSelectedAuth] = useState<number>(0)

    const handleSelectAuthChange = (type: number) => {
        setSelectedAuth(type)
    }

    return (
        <div className='w-150 h-fit bg-white rounded-3xl py-5 px-5 flex flex-col justify-between gap-5'>
            <div className='w-full h-fit flex justify-between items-center'>
                <button onClick={toggleAuth} className='cursor-pointer bg-[#e9e4e0] py-1 px-4 rounded-2xl'>← Back</button>
                <button onClick={toggleAuth} className='cursor-pointer bg-[#e9e4e0] py-1 px-2.5 rounded-2xl'>✕</button>
            </div>

            <div>
                <SubTitle label='🎓 Researcher Portal' />
            </div>

            <div className='w-full px-5'>
                <h2 className='text-(--custom-text-color) font-["lora"] text-[1.5rem] font-semibold'>Join ALLARCH Academy</h2>
                <p className='text-(--custom-text-color) opacity-60'>Create your researcher account</p>
            </div>

            <div className='h-full w-full'>
                <div className='w-full h-10 flex items-center justify-center border-b border-b-gray-300'>
                    <div className='w-[80%] h-full flex'>
                        <button onClick={() => { handleSelectAuthChange(0) }} className={`${selectedAuth === 0 ? 'text-red-600 border-b-2 border-b-red-600' : ''} cursor-pointer w-full h-full text-(--custom-text-color) font-semibold`}>Sign Up</button>
                        <button onClick={() => { handleSelectAuthChange(1) }} className={`${selectedAuth === 1 ? 'text-red-600 border-b-2 border-b-red-600' : ''} cursor-pointer w-full h-full text-(--custom-text-color) font-semibold`}>Log In</button>
                    </div>
                </div>

                {
                    selectedAuth === 0 &&
                    <RegisterContainer onSubTextClick={() => { handleSelectAuthChange(1) }} />
                }

                {
                    selectedAuth === 1 &&
                    <LoginContainer onSubTextClick={() => { handleSelectAuthChange(0) }} />
                }
            </div>
        </div>
    )
}

export default AuthContainer
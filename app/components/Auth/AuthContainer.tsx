'use client'

import { useState } from 'react'
import SubTitle from '../SubTitle/SubTitle'
import RegisterContainer from './RegisterContainer'
import LoginContainer from './LoginContainer'

interface AuthContainerProps {
    authType: number
    toggleAuth: () => void
}

const AuthContainer: React.FC<AuthContainerProps> = ({ authType = 0, toggleAuth }) => {
    const [selectedAuth, setSelectedAuth] = useState<number>(authType)

    const [showChoice, setShowChoice] = useState<boolean>(true)
    const [userType, setUserType] = useState<number>()

    const toggleSetShowChoice = () => {
        setShowChoice(!showChoice)
    }

    const handleUserTypeChange = (userType: number) => {
        setUserType(userType)
    }

    const handleSelectAuthChange = (type: number) => {
        setSelectedAuth(type)
    }

    return (

        <>
            {
                showChoice &&
                <div className='w-150 h-fit bg-white rounded-3xl flex flex-col justify-between gap-5 overflow-hidden'>
                    <div className='w-full h-fit bg-(--lp-portal-info-bg-color) text-white flex flex-col items-center justify-center gap-5 py-5'>
                        <div className='w-full h-fit flex justify-end items-center px-5'>
                            <button onClick={toggleAuth} className='text-[#111] cursor-pointer bg-[#e9e4e0af] py-1 px-2.5 rounded-2xl'>✕</button>
                        </div>
                        <SubTitle label='Welcome to ALLARCH' darkBg={true} />
                        <h1 className='font-["lora"] text-[2rem]'>Who are you joining as?</h1>
                        <p className='opacity-70'>Select your portal to get started</p>
                    </div>

                    <div className='flex flex-col items-center justify-center w-full h-fit px-10 py-8 gap-7'>
                        <div className='w-full h-fit flex items-center justify-between gap-9'>
                            <button onClick={() => { handleUserTypeChange(0) }}
                                className={`shadow cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1 hover:border-(--custom-text-red) hover:bg-[#FEE2E2] flex flex-col justify-between items-center w-fit h-fit border-2 rounded-3xl py-5 px-5 gap-3
                                ${userType === 0 ? 'border-(--custom-text-red) bg-[#FEE2E2] -translate-y-1' : 'border-gray-300'}`}>
                                <span className='text-[2rem]'>🎓</span>
                                <span className='font-semibold'>Researcher</span>
                                <span className='text-center text-[0.9rem] opacity-70'>Learn research skills and earn while I grow</span>
                            </button>

                            <button onClick={() => { handleUserTypeChange(1) }}
                                className={`shadow cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1 hover:border-[#059669] hover:bg-[#ECFDF5] flex flex-col justify-between items-center w-fit h-fit border-2 rounded-3xl py-5 px-5 gap-3
                                ${userType === 1 ? 'border-[#059669] bg-[#ECFDF5] -translate-y-1' : 'border-gray-300'}`}>
                                <span className='text-[2rem]'>💼</span>
                                <span className='font-semibold'>Client</span>
                                <span className='text-center text-[0.9rem] opacity-70'>Hire researchers to complete my project</span>
                            </button>
                        </div>

                        <button onClick={toggleSetShowChoice} className={`shadow cursor-pointer transition duration-200 ease-in-out w-full rounded-3xl py-2.5 font-semibold
                            ${userType === 0 ? 'bg-(--custom-text-red) text-white' : userType === 1 ? 'bg-[#059669] text-white' : 'bg-[#DDD8D0] text-[#6B6B6B]'}`}>
                            {
                                userType === 0 ?
                                <span>Continue as Researcher →</span>
                                :
                                userType === 1 ?
                                <span>Continue as Client →</span>
                                :
                                <span>Continue →</span>
                            }
                        </button>
                    </div>
                </div>
            }
            {
                !showChoice &&
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
            }
        </>
    )
}

export default AuthContainer
'use client'

import { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import ResearchTopic from './ResearchTopic'
import SynopsisProtocol from './SynopsisProtocol'
import DataCollection from './DataCollection'

interface ProjectOnboardingProps {
    onClose: () => void
}

const ProjectOnboarding: React.FC<ProjectOnboardingProps> = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState<number>(1)

    const incrementStep = () => {
        setCurrentStep(currentStep + 1)
    }

    const decrementStep = () => {
        setCurrentStep(currentStep - 1)
    }

    return (
        <div className='w-full h-fit bg-white rounded-3xl overflow-hidden'>
            <div style={{ background: 'linear-gradient(135deg, var(--client-gradient-one), var(--client-gradient-two))' }} className='flex flex-col py-7 px-7 gap-3'>
                <div className='w-full h-fit flex items-center justify-between'>
                    <div className='flex gap-5'>
                        <div className='py-1.5 px-2 rounded-3xl bg-[rgba(52,211,153,.15)] text-[1.6rem]'>⚙️</div>
                        <div className='flex flex-col'>
                            <span className='font-["lora"] text-white text-[1.2rem] font-semibold'>Project Onboarding</span>
                            <span className='text-white text-[0.8rem] opacity-50'>Step 1 of 6</span>
                        </div>
                    </div>

                    <button onClick={onClose} className='cursor-pointer w-fit h-fit rounded-3xl bg-[rgba(255,255,255,.1)] text-white py-1 px-2 text-[0.8rem] flex justify-center items-center'>✕</button>
                </div>
            </div>

            <div className='w-full h-fit bg-[#f5f0eb] flex flex-col py-3 px-10 gap-2 border-b border-gray-300'>
                <div className='flex gap-2'>
                    {
                        [1, 2, 3, 4, 5, 6].map((step: number, index: number) => {
                            return (
                                <div key={index} className={`${currentStep > step ? 'bg-[#059669]' : currentStep === step ? 'bg-red-600' : 'bg-gray-600 opacity-40'} w-1/6 h-1`}></div>
                            )
                        })
                    }
                </div>
                <span className='text-black opacity-60 font-semibold text-[0.75rem]'>Your Credentials</span>
            </div>

            <div className={`${currentStep === 1 ? '' : 'hidden'}`}>
                <PersonalInfo onContinue={incrementStep} />
            </div>

            <div className={`${currentStep === 2 ? '' : 'hidden'}`}>
                <ResearchTopic onBack={decrementStep} onContinue={incrementStep} />
            </div>

            <div className={`${currentStep === 3 ? '' : 'hidden'}`}>
                <SynopsisProtocol onBack={decrementStep} onContinue={incrementStep} />
            </div>

            <div className={`${currentStep === 4 ? '' : 'hidden'}`}>
                <DataCollection onBack={decrementStep} onContinue={incrementStep} />
            </div>
        </div>
    )
}

export default ProjectOnboarding
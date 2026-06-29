'use client'

import { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import ResearchTopic from './ResearchTopic'
import SynopsisProtocol from './SynopsisProtocol'
import DataCollection from './DataCollection'
import WrittenOutput from './WrittenOutput'
import Presentation from './Presentation'
import ProjectSummary from './ProjectSummary'
import { ProjectOnboardServiceData } from '@/app/types/ProjectOnboardingData'

interface ProjectOnboardingProps {
    onComplete: () => void
    onClose: () => void
    selectedServices: number[]
}

const ProjectOnboarding: React.FC<ProjectOnboardingProps> = ({ onComplete, onClose, selectedServices }) => {
    const flow = [0, ...selectedServices, 6]

    const [currentStep, setCurrentStep] = useState(0)
    const [projectData, setProjectData] = useState<ProjectOnboardServiceData[]>([])

    const incrementStep = (serviceData: ProjectOnboardServiceData) => {
        setProjectData(prev => {
            const updated = [...prev]
            updated[currentStep] = serviceData
            return updated
        })

        setCurrentStep(prev => prev + 1)
    }

    const decrementStep = () => {
        setCurrentStep(prev => Math.max(0, prev - 1))
    }

    return (
        <div className='w-full md:w-[60vw] lg:w-[30vw] xl:w-[30vw] h-fit bg-white rounded-3xl overflow-x-hidden'>
            <div style={{ background: 'linear-gradient(135deg, var(--client-gradient-one), var(--client-gradient-two))' }} className='flex flex-col py-7 px-7 gap-3'>
                <div className='w-full h-fit flex items-center justify-between'>
                    <div className='flex gap-5'>
                        <div className='py-1.5 px-2 rounded-3xl bg-[rgba(52,211,153,.15)] text-[1.6rem]'>⚙️</div>
                        <div className='flex flex-col'>
                            <span className='font-["lora"] text-white text-[1.2rem] font-semibold'>Project Onboarding</span>
                            <span className='text-white text-[0.8rem] opacity-50'>Step 1 of {flow.length}</span>
                        </div>
                    </div>

                    <button onClick={onClose} className='cursor-pointer w-fit h-fit rounded-3xl bg-[rgba(255,255,255,.1)] text-white py-1 px-2 text-[0.8rem] flex justify-center items-center'>✕</button>
                </div>
            </div>

            <div className='w-full h-fit bg-[#f5f0eb] flex flex-col py-3 px-10 gap-2 border-b border-gray-300'>
                <div className='flex gap-2'>
                    {
                        flow.map((_, index) => (
                            <div
                                key={index}
                                className={`${currentStep > index
                                    ? 'bg-[#059669]'
                                    : currentStep === index
                                        ? 'bg-red-600'
                                        : 'bg-gray-600 opacity-40'
                                    } w-full h-1`}
                            />
                        ))
                    }
                </div>
                <span className='text-black opacity-60 font-semibold text-[0.75rem]'>Your Credentials</span>
            </div>

            <div className='w-full max-h-[70vh] flex flex-col py-6 gap-5 overflow-auto'>
                <div className={`${flow[currentStep] === 0 ? '' : 'hidden'}`}>
                    <PersonalInfo onContinue={incrementStep} />
                </div>

                <div className={`${flow[currentStep] === 1 ? '' : 'hidden'}`}>
                    <ResearchTopic onBack={decrementStep} onContinue={incrementStep} />
                </div>

                <div className={`${flow[currentStep] === 2 ? '' : 'hidden'}`}>
                    <SynopsisProtocol onBack={decrementStep} onContinue={incrementStep} />
                </div>

                <div className={`${flow[currentStep] === 3 ? '' : 'hidden'}`}>
                    <DataCollection onBack={decrementStep} onContinue={incrementStep} />
                </div>

                <div className={`${flow[currentStep] === 4 ? '' : 'hidden'}`}>
                    <WrittenOutput onBack={decrementStep} onContinue={incrementStep} />
                </div>

                <div className={`${flow[currentStep] === 5 ? '' : 'hidden'}`}>
                    <Presentation onBack={decrementStep} onContinue={incrementStep} />
                </div>

                <div className={`${flow[currentStep] === 6 ? '' : 'hidden'}`}>
                    <ProjectSummary onBack={decrementStep} onContinue={onComplete} projectData={projectData} />
                </div>
            </div>
        </div>
    )
}

export default ProjectOnboarding
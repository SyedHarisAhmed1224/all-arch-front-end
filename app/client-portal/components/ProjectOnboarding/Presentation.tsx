import { useProjectStore } from '@/app/stores/useProjectStore'
import { useEffect, useState } from 'react'
import AmountTotal from './AmountTotal'
import ProjectOnboardingButtons from '../ProjectOnboardingButtons/ProjectOnboardingButtons'
import { ProjectOnboardServiceData } from '@/app/types/ProjectOnboardingData'

interface PresentationProps {
    onContinue: (serviceData: ProjectOnboardServiceData) => void
    onBack: () => void
}

const Presentation: React.FC<PresentationProps> = ({ onContinue, onBack }) => {
    const [hasPresentation, setHasPresentation] = useState<number>(0)
    const [continueButton, setContinueButton] = useState<boolean>(false)

    const { setService } = useProjectStore()

    const handleHasPresentation = (topicID: number) => {
        setHasPresentation(topicID)
        setService('dataCollection', topicID === 2)
    }

    useEffect(() => {
        setContinueButton(hasPresentation === 1 || hasPresentation === 2)
    }, [hasPresentation])
    
    const handleContinue = () => {
        if (continueButton) {
            const data: ProjectOnboardServiceData = {
                id: 6,
                icon: '🎤',
                title: 'Article',
                info: hasPresentation === 1 ? 'Will be prepared' : 'Not needed',
                status: hasPresentation === 1 ? 'applied' : 'no'
            }
            onContinue(data)
        }
    }

    return (
        <div className='w-full h-fit flex flex-col gap-3 px-7 py-5'>
            <div className='flex flex-col gap-1 text-(--custom-text-color)'>
                <span className='text-[1.5rem]'>🎤</span>
                <span className='font-bold'>Do you need a presentation?</span>
                <span className='text-[0.9rem] opacity-70'>Professional slide deck for clinical defence or conferences</span>
            </div>

            <div className='w-full flex gap-3'>
                <button onClick={() => { handleHasPresentation(1) }} className={`${hasPresentation === 1 ? 'border-(--client-top-bar-text-border-color) text-(--client-text-green) bg-[#ECFDF5]' : 'text-(--custom-text-color) border-gray-300'} hover:border-(--client-top-bar-text-border-color) hover:text-(--client-text-green) hover:bg-[#ECFDF5] border font-semibold text-[0.9rem] transition duration-200 ease-in-out w-full px-10 py-3 rounded-xl cursor-pointer`}>✓ Yes, I need it</button>
                <button onClick={() => { handleHasPresentation(2) }} className={`${hasPresentation === 2 ? 'border-(--client-top-bar-text-border-color) text-(--client-text-green) bg-[#ECFDF5]' : 'text-(--custom-text-color) border-gray-300'} hover:border-(--client-top-bar-text-border-color) hover:text-(--client-text-green) hover:bg-[#ECFDF5] border font-semibold text-[0.9rem] transition duration-200 ease-in-out w-full px-10 py-3 rounded-xl cursor-pointer`}>✗ No, not needed</button>
            </div>

            {
                hasPresentation === 1 &&
                <div className='w-full py-3 px-3 flex bg-[#ECFDF5] border border-(--client-top-bar-text-border-color) text-[#03572f] rounded-xl gap-2 text-[0.9rem]'>
                    <span>✅</span>
                    <span className='font-light'>A professional presentation will be prepared based on your research findings.</span>
                </div>
            }

            <div className='w-full h-fit'>
                <AmountTotal />
            </div>

            <ProjectOnboardingButtons onBack={onBack} handleContinue={handleContinue} continueButton={continueButton} />
        </div>
    )
}

export default Presentation
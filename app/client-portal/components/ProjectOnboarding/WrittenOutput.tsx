import { useProjectStore } from '@/app/stores/useProjectStore'
import { useEffect, useState } from 'react'
import AmountTotal from './AmountTotal'
import ProjectOnboardingButtons from '../ProjectOnboardingButtons/ProjectOnboardingButtons'
import { ProjectOnboardServiceData } from '@/app/types/ProjectOnboardingData'
import { useContractStore } from '@/app/stores/useContractStore'

interface WrittenOutputProps {
    onContinue: (serviceData: ProjectOnboardServiceData) => void
    onBack: () => void
}

const WrittenOutput: React.FC<WrittenOutputProps> = ({ onContinue, onBack }) => {
    const [hasWrittenOutput, setHasWrittenOutput] = useState<number>(0)
    const [showTargetJournal, setShowTargetJournal] = useState<boolean>(false)
    const [targetJournal, setTargetJournal] = useState<string>('')
    const [continueButton, setContinueButton] = useState<boolean>(false)

    const { setService } = useProjectStore()
    
    const { updateContractBody } = useContractStore()

    const handleHasWrittenOutput = (outputType: number) => {
        setHasWrittenOutput(outputType)
        setShowTargetJournal(outputType === 1 || outputType === 3)
        setService(4, outputType === 2)
    }

    useEffect(() => {
        setContinueButton(hasWrittenOutput !== 0)
    }, [hasWrittenOutput])

    const handleContinue = () => {
        if (continueButton) {
            const data: ProjectOnboardServiceData = {
                id: 5,
                icon: '📝',
                title: 'Article',
                info: hasWrittenOutput === 4 ? 'Writing by client' : targetJournal.trim() !== '' ? `Jounal: ${targetJournal}` : 'Will be written',
                status: hasWrittenOutput === 4 ? 'self' : 'applied'
            }

            updateContractBody({
                writtenOutputTypeID: hasWrittenOutput,
                targetJournal: hasWrittenOutput === 4 ? targetJournal.trim() : ''
            })

            onContinue(data)
        }
    }

    const handleTargetJournalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTargetJournal(e.target.value)
    }

    return (
        <div className='w-full h-fit flex flex-col gap-3 px-7 py-5'>
            <div className='flex flex-col gap-1 text-(--custom-text-color)'>
                <span className='text-[1.5rem]'>📝</span>
                <span className='font-bold'>What kind of written output do you need?</span>
                <span className='text-[0.9rem] opacity-70'>Select what applies to your project</span>
            </div>

            <div className='w-full flex flex-col gap-3 flex-wrap'>
                <div className='flex w-full h-fit gap-3'>
                    <button onClick={() => { handleHasWrittenOutput(1) }} className={`${hasWrittenOutput === 1 ? 'border-(--client-top-bar-text-border-color) text-(--client-text-green) bg-[#ECFDF5]' : 'text-(--custom-text-color) border-gray-300'} hover:border-(--client-top-bar-text-border-color) hover:text-(--client-text-green) hover:bg-[#ECFDF5] border font-semibold text-[0.9rem] transition duration-200 ease-in-out w-full px-4 py-3 rounded-xl cursor-pointer`}>
                        <div className='w-full h-full flex flex-col items-start'>
                            <span>📝 Article</span>
                            <span className='text-black opacity-50 font-normal'>A journal-ready research article</span>
                        </div>
                    </button>
                    <button onClick={() => { handleHasWrittenOutput(2) }} className={`${hasWrittenOutput === 2 ? 'border-(--client-top-bar-text-border-color) text-(--client-text-green) bg-[#ECFDF5]' : 'text-(--custom-text-color) border-gray-300'} hover:border-(--client-top-bar-text-border-color) hover:text-(--client-text-green) hover:bg-[#ECFDF5] border font-semibold text-[0.9rem] transition duration-200 ease-in-out w-full px-4 py-3 rounded-xl cursor-pointer`}>
                        <div className='w-full h-full flex flex-col items-start'>
                            <span>📘 Thesis</span>
                            <span className='text-black opacity-50 font-normal'>Full thesis chapters</span>
                        </div>
                    </button>
                </div>

                <div className='flex w-full h-fit gap-3'>
                    <button onClick={() => { handleHasWrittenOutput(3) }} className={`${hasWrittenOutput === 3 ? 'border-(--client-top-bar-text-border-color) text-(--client-text-green) bg-[#ECFDF5]' : 'text-(--custom-text-color) border-gray-300'} hover:border-(--client-top-bar-text-border-color) hover:text-(--client-text-green) hover:bg-[#ECFDF5] border font-semibold text-[0.9rem] transition duration-200 ease-in-out w-full px-4 py-3 rounded-xl cursor-pointer`}>
                        <div className='w-full h-full flex flex-col items-start'>
                            <span>📝+📘 Both</span>
                            <span className='text-black opacity-50 font-normal'>Article and Thesis</span>
                        </div>
                    </button>
                    <button onClick={() => { handleHasWrittenOutput(4) }} className={`${hasWrittenOutput === 4 ? 'border-(--client-top-bar-text-border-color) text-(--client-text-green) bg-[#ECFDF5]' : 'text-(--custom-text-color) border-gray-300'} hover:border-(--client-top-bar-text-border-color) hover:text-(--client-text-green) hover:bg-[#ECFDF5] border font-semibold text-[0.9rem] transition duration-200 ease-in-out w-full px-4 py-3 rounded-xl cursor-pointer`}>
                        <div className='w-full h-full flex flex-col items-start'>
                            <span>✗ Neither</span>
                            <span className='text-black opacity-50 font-normal'>I will write it myself</span>
                        </div>
                    </button>
                </div>
            </div>

            {
                showTargetJournal &&
                <div className='w-full py-4 px-4 bg-[#F5F0EB] flex flex-col gap-2 rounded-xl'>
                    <span className='uppercase text-[0.75rem] font-semibold text-(--custom-text-color) opacity-90'>Target Journal (optional)</span>
                    <input onChange={handleTargetJournalChange} placeholder='e.g. JPMA, PJMHS, Lancet...' type="text" className='w-full bg-white text-(--custom-text-color) py-2 px-3 outline-0 rounded-lg text-[0.9rem] border border-gray-300 transition duration-200 ease-in-out focus:border-(--input-text-green-hover)' />
                    <span className='uppercase text-[0.65rem] font-semibold text-(--custom-text-color) opacity-50'>Leave blank — we will suggest suitable journals.</span>
                </div>
            }

            <div className='w-full h-fit'>
                <AmountTotal />
            </div>

            <ProjectOnboardingButtons onBack={onBack} handleContinue={handleContinue} continueButton={continueButton} />
        </div>
    )
}

export default WrittenOutput
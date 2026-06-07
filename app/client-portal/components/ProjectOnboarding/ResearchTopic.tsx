import { useEffect, useState } from 'react'
import AmountTotal from './AmountTotal'
import { useProjectStore } from '@/app/stores/useProjectStore'

interface ResearchTopicProps {
    onContinue: () => void
    onBack: () => void
}

const ResearchTopic: React.FC<ResearchTopicProps> = ({ onContinue, onBack }) => {
    const [hasResearchTopic, setHasResearchTopic] = useState<number>(0)
    const [researchTitle, setResearchTitle] = useState<string>('')
    const [researchNiche, setResearchNiche] = useState<string>('')
    const [continueButton, setContinueButton] = useState<boolean>(false)

    const { setService } = useProjectStore()

    const handleHasResearchTopic = (topicID: number) => {
        setHasResearchTopic(topicID)
        setService('topicFormulation', topicID === 2)
    }

    useEffect(() => {
        setContinueButton((researchTitle != '' && hasResearchTopic === 1) || (researchNiche != '' && hasResearchTopic === 2))
    }, [researchTitle, researchNiche])

    const handleResearchTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResearchTitle(e.target.value)
    }

    const handleResearchNicheChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResearchNiche(e.target.value)
    }

    const handleContinue = () => {
        if (continueButton) {
            onContinue()
        }
    }

    return (
        <div className='w-full h-fit flex flex-col gap-3 px-7 py-5'>
            <div className='flex flex-col gap-1 text-(--custom-text-color)'>
                <span className='text-[1.5rem]'>💡</span>
                <span className='font-bold'>Do you already have a research topic?</span>
                <span className='text-[0.9rem] opacity-70'>If not, we will formulate one from your niche</span>
            </div>

            <div className='w-full flex gap-3'>
                <button onClick={() => { handleHasResearchTopic(1) }} className={`${hasResearchTopic === 1 ? 'border-(--client-top-bar-text-border-color) text-(--client-text-green) bg-[#ECFDF5]' : 'text-(--custom-text-color) border-gray-300'} hover:border-(--client-top-bar-text-border-color) hover:text-(--client-text-green) hover:bg-[#ECFDF5] border font-semibold text-[0.9rem] transition duration-200 ease-in-out w-full px-10 py-3 rounded-xl cursor-pointer`}>✓ Yes, I have it</button>
                <button onClick={() => { handleHasResearchTopic(2) }} className={`${hasResearchTopic === 2 ? 'border-(--client-top-bar-text-border-color) text-(--client-text-green) bg-[#ECFDF5]' : 'text-(--custom-text-color) border-gray-300'} hover:border-(--client-top-bar-text-border-color) hover:text-(--client-text-green) hover:bg-[#ECFDF5] border font-semibold text-[0.9rem] transition duration-200 ease-in-out w-full px-10 py-3 rounded-xl cursor-pointer`}>✗ No, handle for me</button>
            </div>

            {
                hasResearchTopic === 1 &&
                <div className='w-full py-4 px-4 bg-[#F5F0EB] flex flex-col gap-2 rounded-xl'>
                    <span className='uppercase text-[0.75rem] font-semibold text-(--custom-text-color) opacity-90'>Enter Your Research Title</span>
                    <input onChange={handleResearchTitleChange} placeholder='e.g. Hypertension prevalence in urban adults' type="text" className='w-full bg-white text-(--custom-text-color) py-2 px-3 outline-0 rounded-lg text-[0.9rem] border border-gray-300 transition duration-200 ease-in-out focus:border-(--input-text-green-hover)' />
                </div>
            }

            {
                hasResearchTopic === 2 &&
                <div className='w-full py-4 px-4 bg-[#F5F0EB] flex flex-col gap-3 rounded-xl'>
                    <span className='uppercase text-[0.75rem] font-semibold text-(--custom-text-color) opacity-90'>Your Research Niche / Area</span>
                    <input onChange={handleResearchNicheChange} placeholder='e.g. Hypertension prevalence in urban adults' type="text" className='w-full bg-white text-(--custom-text-color) py-2 px-3 outline-0 rounded-lg text-[0.9rem] border border-gray-300 transition duration-200 ease-in-out focus:border-(--input-text-green-hover)' />
                    <div className='w-full bg-[#FEF3C7] rounded-xl border border-[#FDE68A] flex gap-2 py-2 px-2 text-[0.8rem]'>
                        <div className='h-full'>⏱️</div>
                        <div className='text-[#92400E]'>We will send <span className='font-bold'>10 topic suggestions within 2 business days.</span> You choose before any fee is collected.</div>
                    </div>
                </div>
            }

            {
                hasResearchTopic === 2 &&
                <div className='w-full py-3 px-3 flex bg-[#FEE2E2] border border-[#FECACA] text-[#7F1D1D] rounded-xl gap-2 text-[0.9rem]'>
                    <span>➕</span>
                    <span>Topic formulation service will be added to your project.</span>
                </div>
            }

            <div className='w-full h-fit'>
                <AmountTotal />
            </div>

            <div className='flex h-fit gap-3'>
                <button onClick={onBack} className={`hover:border-red-600 hover:text-red-600 cursor-pointer border border-gray-300 w-1/5 mt-2 transition duration-200 ease-in-out h-fit font-semibold text-[1rem] py-2 rounded-3xl`}>← Back</button>
                <button onClick={handleContinue} className={`${continueButton ? 'bg-[#059669] text-white cursor-pointer' : 'bg-[#DDD8D0] text-[#6B6B6B] cursor-not-allowed'} w-4/5 mt-2 transition duration-200 ease-in-out h-fit font-semibold text-[1rem] py-2 rounded-3xl`}>Continue →</button>
            </div>
        </div>
    )
}

export default ResearchTopic
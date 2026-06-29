import { useProjectStore } from '@/app/stores/useProjectStore'
import { useEffect, useState } from 'react'
import AmountTotal from './AmountTotal'
import ProjectOnboardingButtons from '../ProjectOnboardingButtons/ProjectOnboardingButtons'
import { ProjectOnboardServiceData } from '@/app/types/ProjectOnboardingData'
import { useContractStore } from '@/app/stores/useContractStore'

interface SynopsisProtocolProps {
    onContinue: (serviceData: ProjectOnboardServiceData) => void
    onBack: () => void
}

const SynopsisProtocol: React.FC<SynopsisProtocolProps> = ({ onContinue, onBack }) => {
    const [hasSynopsisProtocol, setHasSynopsisProtocol] = useState<number>(0)
    const [synopsisFile, setSynopsisTitle] = useState<string>('')
    const [continueButton, setContinueButton] = useState<boolean>(false)

    const { setService } = useProjectStore()

    const { updateContractBody } = useContractStore()

    const handleHasSynopsisProtocol = (topicID: number) => {
        setHasSynopsisProtocol(topicID)
        setService(2, topicID === 2)
    }

    useEffect(() => {
        setContinueButton((synopsisFile != '' && hasSynopsisProtocol === 1) || hasSynopsisProtocol === 2)
    }, [synopsisFile, hasSynopsisProtocol])

    const handleSynopsisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSynopsisTitle(e.target.value)
    }

    const handleContinue = () => {
        if (continueButton) {
            const data: ProjectOnboardServiceData = {
                id: 3,
                icon: '📋',
                title: 'Protocol',
                info: synopsisFile != '' && hasSynopsisProtocol === 1 ? 'File uploaded' : 'ALLARCH will write',
                status: synopsisFile != '' && hasSynopsisProtocol === 1 ? 'provided' : 'applied'
            }

            updateContractBody({
                hasProtocol: hasSynopsisProtocol === 1 ? 1 : 0,
                protocolFile: "JVBERi0xLjQKMSAwIG9iaid0ZXN0IGNvbnRlbnQnIGVuZG9iag=="
            })

            onContinue(data)
        }
    }

    return (
        <div className='w-full h-fit flex flex-col gap-3 px-7 py-5'>
            <div className='flex flex-col gap-1 text-(--custom-text-color)'>
                <span className='text-[1.5rem]'>📋</span>
                <span className='font-bold'>Do you have a written synopsis or protocol?</span>
                <span className='text-[0.9rem] opacity-70'>A research protocol with ethics committee approval</span>
            </div>

            <div className='w-full flex gap-3'>
                <button onClick={() => { handleHasSynopsisProtocol(1) }} className={`${hasSynopsisProtocol === 1 ? 'border-(--client-top-bar-text-border-color) text-(--client-text-green) bg-[#ECFDF5]' : 'text-(--custom-text-color) border-gray-300'} hover:border-(--client-top-bar-text-border-color) hover:text-(--client-text-green) hover:bg-[#ECFDF5] border font-semibold text-[0.9rem] transition duration-200 ease-in-out w-full px-10 py-3 rounded-xl cursor-pointer`}>✓ Yes, I have it</button>
                <button onClick={() => { handleHasSynopsisProtocol(2) }} className={`${hasSynopsisProtocol === 2 ? 'border-(--client-top-bar-text-border-color) text-(--client-text-green) bg-[#ECFDF5]' : 'text-(--custom-text-color) border-gray-300'} hover:border-(--client-top-bar-text-border-color) hover:text-(--client-text-green) hover:bg-[#ECFDF5] border font-semibold text-[0.9rem] transition duration-200 ease-in-out w-full px-10 py-3 rounded-xl cursor-pointer`}>✗ No, handle for me</button>
            </div>

            {
                hasSynopsisProtocol === 1 &&
                <div className='w-full py-4 px-4 bg-[#F5F0EB] flex flex-col gap-2 rounded-xl'>
                    <span className='uppercase text-[0.75rem] font-semibold text-(--custom-text-color) opacity-90'>Enter Your Research Title</span>
                    <div className='w-full h-fit border-2 border-dashed border-gray-300 transition duration-200 ease-in-out rounded-lg overflow-hidden flex flex-col items-center justify-center bg-white py-2 px-2'>
                        <div className='text-[1.5rem]'>📄</div>
                        <input onChange={handleSynopsisChange} accept=".pdf,.doc,.docx" type="file" className='cursor-pointer text-(--custom-text-color) py-2 px-3 outline-0 text-[0.9rem]' />
                    </div>
                </div>
            }

            {
                hasSynopsisProtocol === 2 &&
                <div className='w-full py-3 px-3 flex bg-[#FEE2E2] border border-[#FECACA] text-[#7F1D1D] rounded-xl gap-2 text-[0.9rem]'>
                    <span>✏️</span>
                    <span><span className='font-bold'>ALLARCH will write your full protocol</span> including unlimited ethics objection handling. This service will be added to your project.</span>
                </div>
            }

            <div className='w-full h-fit'>
                <AmountTotal />
            </div>

            <ProjectOnboardingButtons onBack={onBack} handleContinue={handleContinue} continueButton={continueButton} />
        </div>
    )
}

export default SynopsisProtocol
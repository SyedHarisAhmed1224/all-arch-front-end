import { useProjectStore } from '@/app/stores/useProjectStore'
import ProjectOnboardingButtons from '../ProjectOnboardingButtons/ProjectOnboardingButtons'
import { ProjectOnboardServiceData } from '@/app/types/ProjectOnboardingData'

interface ProjectSummaryProps {
    onContinue: () => void
    onBack: () => void
    projectData: ProjectOnboardServiceData[]
}

interface ChosenServicesProps {
    icon: string
    title: string
    subTitles: string
    status: 'confirm' | 'provided' | 'self' | 'applied' | 'no'
}

const ChosenServices: React.FC<ChosenServicesProps> = ({ icon, title, subTitles, status }) => {
    return (
        <div className='w-full display flex items-center justify-between border-b border-b-gray-300 gap-3 py-2'>
            <div className='w-[5%] text-[0.8rem]'>{icon}</div>
            <div className='w-full flex flex-col justify-between'>
                <span className='text-(--custom-text-color) font-semibold text-[0.9rem]'>{title}</span>
                <span className='text-(--custom-text-color) font-semibold text-[0.7rem] opacity-70'>{subTitles}</span>
            </div>
            <div className='w-fit'>
                {
                    status === 'confirm' &&
                    <div className='w-5.5 h-5.5 font-bold flex items-center justify-center py-3 px-3 text-[0.9rem] bg-[#ECFDF5] border border-(--client-top-bar-text-border-color) text-[#03572f] rounded-2xl'>✓</div>
                }
                {
                    status === 'applied' &&
                    <div className='w-fit h-fit bg-[#FEE2E2] py-0.5 px-2 border border-red-400 text-[#991B1B] rounded-2xl text-[0.75rem] font-semibold'>Applied</div>
                }
                {
                    status === 'self' &&
                    <div className='w-fit h-fit bg-[#F5F0EB] py-0.5 px-2 border border-gray-400 text-[#6B6B6B] rounded-2xl text-[0.75rem] font-semibold'>Self</div>
                }
                {
                    status === 'provided' &&
                    <div className='w-fit h-fit bg-[#ECFDF5] py-0.5 px-2 border border-(--client-top-bar-text-border-color) text-[#03572f] rounded-2xl text-[0.75rem] font-semibold'>Provided</div>
                }
                {
                    status === 'no' &&
                    <div className='w-fit h-fit bg-[#F5F0EB] py-0.5 px-2 border border-gray-400 text-[#6B6B6B] rounded-2xl text-[0.75rem] font-semibold'>No</div>
                }
            </div>
        </div>
    )
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ onContinue, onBack, projectData }) => {
    const total = useProjectStore((state) => state.getTotalAmount())

    const FinalAmountTotal: React.FC = () => {
        return (
            <div style={{ background: 'linear-gradient(135deg, var(--client-gradient-one), var(--client-gradient-two))' }} className='w-full flex py-3 px-5 rounded-xl'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <span className='text-white opacity-70 text-[0.8rem] uppercase'>Total Services Cost</span>
                    <span className='text-(--client-top-bar-text-color) font-["lora"] text-[1.8rem]'>PKR {total}</span>
                    <span className='text-white opacity-50 text-[0.7rem]'>Data collection may be revised after study confirmation</span>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full h-fit flex flex-col gap-3 px-7 py-5'>
            <div className='text-(--custom-text-color) uppercase text-[0.8rem] font-semibold opacity-70'>Project Summary</div>

            <div className='flex flex-col'>
                {projectData.map((data: ProjectOnboardServiceData, index: number) => {
                    return (
                        <ChosenServices key={index} icon={data.icon} title={data.title} subTitles={data.info} status={data.status} />
                    )
                })}
            </div>

            <div className='w-full h-fit'>
                <FinalAmountTotal />
            </div>

            <div className='w-full flex flex-col gap-3 rounded-xl'>
                <div className='w-full bg-[#FEF3C7] rounded-xl border border-[#FDE68A] flex gap-2 py-3 px-3 text-[0.8rem]'>
                    <div className='h-full text-[1.1rem]'>⚠️</div>
                    <div className='text-[#92400E]'><span className='font-bold'>50% advance of PKR {total / 2} required</span> before work begins. Your project dashboard will open after submission.</div>
                </div>
            </div>

            <ProjectOnboardingButtons onBack={onBack} handleContinue={onContinue} continueButton={true} label='Submit Project →' />
        </div>
    )
}

export default ProjectSummary
import SubTitle from '@/app/components/SubTitle/SubTitle'

interface ResearchFoundationCardProps {
    status: 'Active' | 'Exam'
    icon: string
    title: string
    description: string
    taskDescription: string
}

const ResearchFoundationCard: React.FC<ResearchFoundationCardProps> = ({ status, icon, title, description, taskDescription }) => {
    return (
        <div className='hover:shadow-xl hover:-translate-y-1 cursor-pointer tranistion duration-200 ease-in-out w-39.5 h-60 bg-white flex flex-col gap-2 py-3 px-3 rounded-2xl border border-[#2563EB]'>
            <div className='w-full h-fit text-end'><span className='bg-[#DBEAFE] text-[#2563EB] text-[0.67rem] font-bold py-1 px-2 rounded-3xl'>{status}</span></div>

            <div className='w-full h-fit text-start text-[1.6rem]'>{icon}</div>

            <div className='w-full h-fit text-[0.85rem] font-semibold leading-4'>{title}</div>

            <div className='w-full h-fit text-[0.75rem] opacity-60 leading-4'>{description}</div>

            <div className='w-full text-[0.75rem] text-[#7C3AED] font-semibold'>{taskDescription}</div>

            <div className='w-full h-1 bg-[#DDD8D0] rounded-2xl mb-2'></div>
        </div>
    )
}

interface ResearchFoundationExamCardProps {
    status: 'Active' | 'InActive'
    icon: string
    title: string
    description: string
    taskDescription: string
}

const ResearchFoundationExamCard: React.FC<ResearchFoundationExamCardProps> = ({ status, icon, title, description, taskDescription }) => {
    return (
        <div style={{ background: 'linear-gradient(135deg,#1a0a00,#2a1000)' }} className={`${status === 'InActive' ? 'cursor-not-allowed opacity-70' : ''} w-39.5 h-60 flex flex-col gap-2 py-3 px-3 rounded-2xl border border-[#2563EB]`}>
            <div className='w-full h-fit text-end'><span className='bg-[#FEF3C7] text-[#92400E] text-[0.67rem] font-bold py-1 px-2 rounded-3xl'>🔒 Exam</span></div>

            <div className='w-full h-fit text-start text-[1.6rem]'>{icon}</div>

            <div className='w-full h-fit text-[0.85rem] font-semibold leading-4 text-white'>{title}</div>

            <div className='w-full h-fit text-[0.75rem] opacity-60 leading-4 text-white'>{description}</div>

            <div className='w-full text-[0.75rem] text-[#D97706] font-semibold'>{taskDescription}</div>
        </div>
    )
}

const ResearchFoundation: React.FC = () => {
    return (
        <div className='w-full h-fit flex flex-col items-center justify-between gap-5'>
            <div className='w-full h-fit flex items-center justify-between'>
                <span className='opacity-70'>Foundation of Research — 5 Topics · 30 Tasks</span>
                <SubTitle label='🔓 Unlocked' greenBg={true} />
            </div>

            <div className='w-full h-fit flex items-start flex-wrap gap-3'>
                <ResearchFoundationCard status='Active' icon='🔀' title='Quantitative vs Qualitative' description='Types of research, differences, and when to use each.' taskDescription='6 Tasks · +60 XP' />
                <ResearchFoundationCard status='Active' icon='📊' title='Data Variable Types' description='Categorical, ordinal, continuous — definitions and examples.' taskDescription='6 Tasks · +60 XP' />
                <ResearchFoundationCard status='Active' icon='🧮' title='Statistical Tests' description='Which test for which data? t-test, chi-square, ANOVA, and more.' taskDescription='6 Tasks · +60 XP' />
                <ResearchFoundationCard status='Active' icon='💾' title='Creating SPSS Sheet' description='Variable View setup, data entry, coding and saving .sav files.' taskDescription='6 Tasks · +60 XP' />
                <ResearchFoundationCard status='Active' icon='📐' title='Study Design & Limitations' description='Cross-sectional, case-control, cohort, RCT — and their limitations.' taskDescription='6 Tasks · +60 XP' />
                <ResearchFoundationExamCard status='InActive' icon='📝' title='Stage 1 Exam' description='60% passing marks required. Unlocks when all 3 criteria are met.' taskDescription='20 Questions · Fee Required' />
            </div>
        </div>
    )
}

export default ResearchFoundation
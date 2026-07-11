interface StageInfoCardProps {
    icon: string
    title: string
    description: string
    stageProgress: string
    complete: boolean
}

const StageInfoCard: React.FC<StageInfoCardProps> = ({ icon, title, description, stageProgress, complete }) => {
    return (
        <div className={`${complete ? 'bg-[rgba(5,150,105,.1)] border-[rgba(5,150,105,.3)]' : 'bg-[rgba(255,255,255,.06)] border-[rgba(255,255,255,.1)]'} w-full h-fit border flex items-center justify-between gap-3 text-white rounded-xl py-2 px-4`}>
            <span>{icon}</span>

            <div className='flex flex-col items-start justify-center flex-5/6'>
                <span className='text-[0.9rem] font-semibold'>{title}</span>
                <span className='text-[0.78rem] opacity-50 font-light'>{description}</span>
            </div>

            <div className={`${complete ? 'bg-[rgba(5,150,105,.2)] text-[#34D399]' : 'bg-[rgba(255,255,255,.1)] text-[#FFFFFF73]'} py-0.5 px-2 text-[0.8rem] font-semibold text-center rounded-3xl`}>{stageProgress}</div>
        </div>
    )
}

const StageInfo: React.FC = () => {
    return (
        <div style={{ background: 'linear-gradient(135deg, #0A0A0A, #1A0808)' }}
            className='w-full h-fit flex flex-col items-start justify-between gap-5 text-white rounded-3xl py-5 px-8'>
            <span className='uppercase tracking-wider opacity-50 text-[0.8rem] font-semibold'>Stage 1 Passing Criteria</span>

            <StageInfoCard complete={true} icon='📊' title='Enroll in Data Collection Gig' description='Apply & submit SPSS sheet for at least 1 study' stageProgress='1 / 1' />
            <StageInfoCard complete={false} icon='📁' title='Submit SPSS Sheet' description='Upload completed .sav file from your gig' stageProgress='1 / 1' />
            <StageInfoCard complete={false} icon='📚' title='Stage 1 Exam — 60% Passing Marks' description='Finish 30 tasks across all Stage 1 modules' stageProgress='0 / 30' />
            <StageInfoCard complete={false} icon='📝' title='Enroll in Data Collection Gig' description='Unlocks when all 3 criteria above are met' stageProgress='Locked' />

            <div className='w-full flex flex-col items-center justify-between gap-2'>
                <div className='w-full flex items-center justify-between'>
                    <span className='text-white opacity-40 text-[0.75rem]'>Overall Stage 1 Progress</span>
                    <span className='text-white opacity-40 text-[0.75rem]'>25%</span>
                </div>
                <div className='w-full h-1.5 bg-[#FFFFFF1A] flex items-center justify-between rounded-3xl overflow-hidden'>
                    <div className='w-[25%] h-full bg-[#DC2626] rounded-3xl'></div>
                </div>
            </div>
        </div>
    )
}

export default StageInfo
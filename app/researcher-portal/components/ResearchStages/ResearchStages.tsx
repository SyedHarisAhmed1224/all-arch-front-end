import { ResearchStagesCardProps, ResearchStagesData, ResearchStagesProps } from '@/app/constants/ResearcherStages'

const ResearchStagesCard: React.FC<ResearchStagesCardProps> = ({ locked, status, icon, title, description }) => {
    return (
        <div className={`${locked ? 'opacity-50 cursor-not-allowed' : ''} w-39.5 h-50 bg-white flex flex-col gap-2 py-3 px-3 rounded-2xl border border-[#2563EB]`}>
            <div className='w-full h-fit text-end'><span className='text-[0.67rem] font-semibold py-1 px-2 rounded-3xl'>{status}</span></div>

            <div className='w-full h-fit text-start text-[1.6rem]'>{icon}</div>

            <div className='w-full h-fit text-[0.85rem] font-semibold leading-4'>{title}</div>

            <div className='w-full h-fit text-[0.75rem] opacity-60 leading-4'>{description}</div>
        </div>
    )
}

const ResearchStage: React.FC<ResearchStagesProps> = ({ sectionTitle, title, titleStatusDescription, researchStagesCards }) => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='w-full h-fit flex items-center justify-between gap-5'>
                <span className='w-fit whitespace-nowrap uppercase tracking-wider font-semibold opacity-60 text-[0.9rem]'>{sectionTitle}</span>
                <div className='w-full h-0.5 bg-gray-300'></div>
            </div>

            <div className='flex w-full h-fit items-center justify-between'>
                <span className='text-[0.90rem] opacity-70'>{title}</span>
                <div className='bg-[#EDE8E0] text-[#6B6B6B] py-1 px-2 rounded-3xl font-semibold text-[0.8rem]'>{titleStatusDescription}</div>
            </div>

            <div className='w-full flex items-center justify-items-stretch gap-3 flex-wrap'>
                {researchStagesCards.map((researchStagesCard: ResearchStagesCardProps, index) => {
                    return (
                        <div key={index}>
                            <ResearchStagesCard
                                locked={researchStagesCard.locked}
                                status={researchStagesCard.status}
                                icon={researchStagesCard.icon}
                                title={researchStagesCard.title}
                                description={researchStagesCard.description} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


const ResearchStages: React.FC = () => {
    return (
        <div className='w-full h-fit flex flex-col gap-5'>
            {ResearchStagesData.map((researchStagesData: ResearchStagesProps, index) => {
                return (
                    <ResearchStage
                        key={index}
                        sectionTitle={researchStagesData.sectionTitle}
                        title={researchStagesData.title}
                        titleStatusDescription={researchStagesData.titleStatusDescription}
                        researchStagesCards={researchStagesData.researchStagesCards}
                    />
                )
            })}
        </div>
    )
}

export default ResearchStages
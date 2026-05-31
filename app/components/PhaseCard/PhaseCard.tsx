export interface PhaseCardInfo {
    phaseNumber: string
    phaseCategory: string
    phaseTitle: string
    firstColumnTitle: string
    firstColumnList: string[]
    secondColumnTitle: string
    secondColumnList: string[]
    thirdColumnInfo?: string
    metaPillList: string[]
    topLevel?: boolean
}

interface PhaseCardProps {
    switchTitleColors?: boolean
    phaseCard: PhaseCardInfo
}

const PhaseCardDescription: React.FC<{ phaseCardTitle: string, phaseCardList: string[] }> = ({ phaseCardTitle, phaseCardList }) => {
    return (
        <div className='flex flex-col py-5 px-5'>
            <span className='text-(--custom-text-red) uppercase font-semibold text-[0.8rem]'>{phaseCardTitle}</span>
            <div className='mt-2'>
                {phaseCardList.map((text: string, index: number) => {
                    return (
                        <div key={index} className='flex items-center gap-1'>
                            <span className='text-(--custom-text-red)'>→</span>
                            <span className='text-[0.8rem] text-(--custom-sub-text-color)'>{text}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const MetaPill: React.FC<{ metaPillText: string }> = ({ metaPillText }) => {
    return (
        <div className='py-1 px-3 rounded-2xl bg-(--meta-pill-bg) flex items-center justify-center gap-2 border border-gray-400'>
            <span className='w-1.25 h-1.25 bg-(--custom-text-red) rounded-2xl'></span>
            <span className='text-(--custom-text-color) text-[0.8rem] font-semibold'>{metaPillText}</span>
        </div>
    )
}

const PhaseCard: React.FC<PhaseCardProps> = ({ switchTitleColors, phaseCard }) => {
    return (
        <div className='w-full h-full flex flex-col bg-white rounded-2xl overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-2xl'>
            <div className='flex'>
                <div className={`${switchTitleColors ? 'bg-(--lp-portal-info-bg-color)' : 'bg-(--custom-text-red)'} flex flex-col items-center justify-center text-white py-3 px-8`}>
                    <span className='font-["lora"] text-[2.5rem] font-semibold'>{phaseCard.phaseNumber}</span>
                    <span className='uppercase tracking-wide text-[0.7rem] text-gray-300'>Phase</span>
                </div>

                <div className='bg-(--lp-portal-info-bg-color) w-full px-5 flex items-center'>
                    <div className={`flex flex-col w-fit h-full items-start justify-center px-7 ${switchTitleColors ? 'bg-(--custom-text-red)' : ''}`}>
                        <span className='text-white opacity-50 text-[0.75rem] font-bold uppercase tracking-wider'>{phaseCard.phaseCategory}</span>
                        <span className='text-white font-semibold text-[1.2rem]'>{phaseCard.phaseTitle}</span>
                    </div>
                </div>
            </div>

            <div className='flex justify-between bg-white'>
                <div className='w-1/3'>
                    <PhaseCardDescription phaseCardTitle={phaseCard.firstColumnTitle} phaseCardList={phaseCard.firstColumnList} />
                </div>

                <div className='border-l border-r border-gray-300 pl-4 w-1/3'>
                    <PhaseCardDescription phaseCardTitle={phaseCard.secondColumnTitle} phaseCardList={phaseCard.secondColumnList} />
                </div>

                <div className='flex flex-col py-5 px-5 w-1/3'>
                    <span className='text-(--custom-text-red) uppercase font-semibold text-[0.8rem]'>Details</span>

                    <div className='flex flex-wrap mt-3 gap-2'>
                        {phaseCard.metaPillList.map((text, index) => (
                            <MetaPill key={index} metaPillText={text} />
                        ))}
                    </div>

                    { phaseCard.thirdColumnInfo && <span className='mt-3 text-[0.85rem] text-(--custom-sub-text-color)'>{phaseCard.thirdColumnInfo}</span> }
                </div>
            </div>
        </div>
    )
}

export default PhaseCard
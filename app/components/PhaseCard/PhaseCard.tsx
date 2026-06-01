import React from 'react'

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
        <div className='flex flex-col py-4 px-5 md:py-5'>
            <span className='text-(--custom-text-red) uppercase font-semibold text-[0.8rem]'>{phaseCardTitle}</span>
            <div className='mt-2 space-y-1.5'>
                {phaseCardList.map((text: string, index: number) => {
                    return (
                        <div key={index} className='flex items-start gap-1'>
                            <span className='text-(--custom-text-red) shrink-0 leading-tight'>→</span>
                            <span className='text-[0.8rem] text-(--custom-sub-text-color) leading-tight'>{text}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const MetaPill: React.FC<{ metaPillText: string }> = ({ metaPillText }) => {
    return (
        <div className='py-1 px-3 rounded-2xl bg-(--meta-pill-bg) flex items-center justify-center gap-2 border border-gray-300 shrink-0'>
            <span className='w-1.25 h-1.25 bg-(--custom-text-red) rounded-full shrink-0'></span>
            <span className='text-(--custom-text-color) text-[0.8rem] font-semibold whitespace-nowrap'>{metaPillText}</span>
        </div>
    )
}

const PhaseCard: React.FC<PhaseCardProps> = ({ switchTitleColors, phaseCard }) => {
    return (
        <div className='w-full h-fit flex flex-col bg-white rounded-2xl overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-2xl border border-gray-100'>

            {/* Header section */}
            <div className='flex flex-row h-24 md:h-28'>
                <div className={`${switchTitleColors ? 'bg-(--lp-portal-info-bg-color)' : 'bg-(--custom-text-red)'} flex flex-col items-center justify-center text-white w-24 md:w-28 shrink-0`}>
                    <span className='font-["lora"] text-[2rem] md:text-[2.5rem] font-semibold leading-none'>{phaseCard.phaseNumber}</span>
                    <span className='uppercase tracking-wide text-[0.6rem] md:text-[0.7rem] text-gray-300 mt-1'>Phase</span>
                </div>

                <div className='bg-(--lp-portal-info-bg-color) w-full flex items-center justify-between'>
                    <div className={`flex flex-col w-full h-full items-start justify-center px-5 md:px-7 ${switchTitleColors ? 'bg-(--custom-text-red)' : ''}`}>
                        <span className='text-white opacity-50 text-[0.65rem] md:text-[0.75rem] font-bold uppercase tracking-wider'>{phaseCard.phaseCategory}</span>
                        <span className='text-white font-semibold text-[1rem] md:text-[1.2rem] leading-tight mt-0.5'>{phaseCard.phaseTitle}</span>
                    </div>
                </div>
            </div>

            {/* Responsive Columns Container */}
            <div className='flex flex-col md:flex-row bg-white divide-y md:divide-y-0 md:divide-x divide-gray-200'>

                {/* Column 1 */}
                <div className='w-full md:w-1/3'>
                    <PhaseCardDescription phaseCardTitle={phaseCard.firstColumnTitle} phaseCardList={phaseCard.firstColumnList} />
                </div>

                {/* Column 2 */}
                <div className='w-full md:w-1/3'>
                    <PhaseCardDescription phaseCardTitle={phaseCard.secondColumnTitle} phaseCardList={phaseCard.secondColumnList} />
                </div>

                {/* Column 3 - Details */}
                <div className='flex flex-col py-4 px-5 md:py-5 w-full md:w-1/3 justify-between'>
                    <div>
                        <span className='text-(--custom-text-red) uppercase font-semibold text-[0.8rem]'>Details</span>

                        {/* Desktop uses flex-wrap, mobile can safely wrap pills or display in a tight stack */}
                        <div className='flex flex-wrap items-center gap-2 mt-3'>
                            {phaseCard.metaPillList.map((text, index) => (
                                <MetaPill key={index} metaPillText={text} />
                            ))}
                        </div>
                    </div>

                    {phaseCard.thirdColumnInfo && (
                        <span className='mt-4 text-[0.8rem] md:text-[0.85rem] text-(--custom-sub-text-color) leading-relaxed pt-2 md:pt-0'>
                            {phaseCard.thirdColumnInfo}
                        </span>
                    )}
                </div>

            </div>
        </div>
    )
}

export default PhaseCard
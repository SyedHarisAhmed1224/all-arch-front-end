export interface InterRewardCardsInfo {
    id: number
    value: number
    type: string
    hasRedBorder?: boolean
}

interface InterRewardCardsProps {
    cardInfo: InterRewardCardsInfo
}

const InterRewardCards: React.FC<InterRewardCardsProps> = ({ cardInfo }) => {
    return (
        <div className={`transition duration-200 hover:-translate-y-1 bg-white w-90 sm:w-50 lg:w-110 h-45 rounded-2xl flex flex-col items-center justify-center border ${cardInfo.hasRedBorder ? 'border-(--custom-text-red)' : 'border-gray-300'}`}>
            <span className='uppercase text-black opacity-70 font-semibold tracking-wider text-[0.8rem]'>Type {cardInfo.id}</span>
            <span className='font-[lora] text-(--custom-text-red) font-semibold text-[2rem]'>{cardInfo.value}</span>
            <span className='text-[0.9rem] text-black opacity-60'>PKR per query</span>
            <span className='font-semibold mt-3'>{cardInfo.type}</span>
        </div>
    )
}

export default InterRewardCards
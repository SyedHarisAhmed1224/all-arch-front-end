export interface ResearchServiceCardInfo {
    icon: string
    title: string
    subText: string
}

interface ResearchServiceCardProps {
    cardInfo: ResearchServiceCardInfo
}

const ResearchServiceCard: React.FC<ResearchServiceCardProps> = ({ cardInfo }) => {
    return (
        <div className='w-65 h-60 bg-white border border-gray-300 rounded-2xl px-5 py-5 flex flex-col gap-1 transition duration-200 hover:-translate-y-1'>
            <div className='w-fit h-fit py-2 px-2 bg-red-100 rounded-xl'>
                <span className='text-[1.25rem]'>{cardInfo.icon}</span>
            </div>

            <span className='font-semibold mt-2'>{cardInfo.title}</span>

            <span className='text-[0.9rem] text-black opacity-70'>{cardInfo.subText}</span>
        </div>
    )
}

export default ResearchServiceCard
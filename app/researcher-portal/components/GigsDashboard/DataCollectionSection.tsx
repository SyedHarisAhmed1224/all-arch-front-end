import SubTitle from '@/app/components/SubTitle/SubTitle'
import { DataCollectionCardData } from '@/app/constants/DataCollectionData'

export interface DataCollectionSectionCardTagProps {
    type: 'category' | 'reward' | 'experience' | 'stage-one' | 'stage-two' | 'stage-three'
    text: string
}

const DataCollectionSectionCardTag: React.FC<DataCollectionSectionCardTagProps> = ({ type, text }) => {
    return (
        <div
            className={`font-bold py-1 px-3 text-[0.7rem] rounded-3xl
            ${type === 'category' ? 'bg-[#DBEAFE] text-[#2563EB]' :
                    type === 'reward' ? 'bg-[#ECFDF5] text-[#065F46]' :
                        type === 'experience' ? 'bg-[#EDE9FE] text-[#7C3AED]' :
                            type === 'stage-one' ? 'bg-[#EDE8E0] text-[#3D3D3D]' :
                                type === 'stage-two' ? 'bg-[#FEE2E2] text-[#991B1B]' :
                                    type === 'stage-three' ? 'bg-[#FEF3C7] text-[#92400E]' :
                                        ''}`}>
            {text}
        </div>
    )
}

export interface DataCollectionSectionCardProps {
    icon: string
    title: string
    subTitle: string
    tags: DataCollectionSectionCardTagProps[]
    reward: string
    experience: string
    locked: boolean
    required?: number
}

const DataCollectionSectionCard: React.FC<DataCollectionSectionCardProps> = ({
    icon,
    title,
    subTitle,
    tags,
    reward,
    experience,
    locked = false,
    required
}) => {
    return (
        <div className='w-full h-fit bg-white rounded-2xl border border-gray-300 flex flex-col items-center justify-between py-5 px-5 gap-3'>
            <div className='w-full h-fit flex items-center justify-between gap-5'>
                <span className='bg-[#DBEAFE] text-[1.2rem] py-2 px-2 rounded-xl'>{icon}</span>

                <div className='w-full h-fit flex flex-col gap-1'>
                    <span className='font-semibold'>{title}</span>
                    <span className='text-[0.8rem] opacity-70'>{subTitle}</span>
                </div>
            </div>

            <div className='w-full flex items-center gap-3'>
                {tags.map((tag: DataCollectionSectionCardTagProps, index) => {
                    return (
                        <DataCollectionSectionCardTag key={index} type={tag.type} text={tag.text} />
                    )
                })}
            </div>

            <div className='w-full flex items-center justify-between'>
                <div className='flex gap-2 text-[0.8rem] font-semibold'>
                    <span className='text-[#065F46]'>{reward}</span>
                    <span className='text-[#7C3AED]'>{experience}</span>
                </div>

                {
                    !locked &&
                    <button className='hover:bg-[#065F46] transition duration-300 ease-in-out cursor-pointer bg-[#059669] text-white font-semibold py-1 px-5 rounded-3xl text-[0.9rem]'>Apply →</button>
                }

                {
                    locked &&
                    <button className='bg-[#EDE8E0] text-[#6B6B6B] font-semibold py-1 px-5 rounded-3xl text-[0.9rem]'>🔒 Stage {required} Required</button>
                }
            </div>
        </div>
    )
}

const DataCollectionSection: React.FC = () => {
    return (
        <div className='w-full h-fit flex flex-col gap-5'>
            <SubTitle label='Available Now' />

            <h1 className='font-[lora] text-[1.2rem]'>Data Collection Gigs</h1>

            {DataCollectionCardData.map((data: DataCollectionSectionCardProps, index) => {
                return (
                    <DataCollectionSectionCard
                        key={index}
                        icon={data.icon}
                        title={data.title}
                        subTitle={data.subTitle}
                        tags={data.tags}
                        reward={data.reward}
                        experience={data.experience}
                        locked={data.locked}
                        required={data.required}
                    />
                )
            })}
        </div>
    )
}

export default DataCollectionSection
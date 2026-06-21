import './PortalTypeInfoCards.css'

interface PortalTypeInfoCardsProps {
    type: 'researcher' | 'client'
    title: string
    subText: string
    info: string[]
    icon: string
    onAuthClick: () => void
}

const PortalTypeInfoCards: React.FC<PortalTypeInfoCardsProps> = ({ onAuthClick, type, title, subText, info, icon }) => {
    return (
        <div
            style={{
                background: type === 'researcher' ? 'linear-gradient(135deg, #1A1A1A, #2A1010)' : 'linear-gradient(135deg, #0A1A10, #071520)',
                border: type === 'researcher' ? '1px solid rgba(220,38,38,.3)' : '1px solid rgba(5,150,105,.25)'
            }}
            className='custom-portal-type-card w-full h-full rounded-3xl flex flex-col gap-4 py-10 px-8 justify-start cursor-pointer'
        >
            <div className='text-[2.2rem]'>{icon}</div>
            <span className='text-white font-semibold text-[1.3rem]'>{title}</span>
            <span className='text-mist-400 text-[0.83rem]'>{subText}</span>

            <div className='flex flex-col'>
                {info.map((text: string, index: number) => {
                    return (
                        <div key={index} className='flex items-center gap-2'>
                            <span className={`${type === 'researcher' ? 'text-(--custom-text-red)' : 'text-green-600'} text-[0.9rem]'`}>
                                ✓
                            </span>
                            <span className='text-mist-400 text-[0.85rem]'>{text}</span>
                        </div>
                    )
                })}
            </div>

            <button onClick={onAuthClick} className={`${type === 'researcher' ? 'bg-(--custom-text-red) hover:bg-red-800 text-white' : 'bg-green-600 hover:bg-green-800'} rounded-[20px] py-1.5 px-1 font-semibold text-[0.9rem] w-45 mt-3 flex items-center justify-center cursor-pointer transition duration-200 ease-in-out`}>
                { type === 'researcher' ? 'Join as Researcher →' : 'Hire a Researcher →' }
            </button>
        </div>
    )
}

export default PortalTypeInfoCards
const Header: React.FC = () => {
    return (
        <div className="w-full h-full bg-(--lp-portal-info-bg-color) flex items-center justify-center py-3">
            <div className='w-[90%] h-full flex items-center justify-between'>
                <div className='flex w-fit items-center justify-between gap-2 text-[1.5rem] font-semibold'>
                    <span className='text-white'>ALL</span> <span className='text-(--custom-text-red)'>ARCH</span>
                    <span className='text-white opacity-50 font-light tracking-[0.12rem] text-[0.55rem] uppercase'>The Hub of All Research</span>
                </div>

                <div style={{ background: 'rgba(52,211,153,.15)' }} className='w-fit h-fit rounded-2xl flex items-center justify-center px-4 py-1.5 border border-(--client-top-bar-text-border-color)'>
                    <span className='text-(--client-top-bar-text-color) text-[0.7rem] font-semibold'>
                        💼 Client Portal
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
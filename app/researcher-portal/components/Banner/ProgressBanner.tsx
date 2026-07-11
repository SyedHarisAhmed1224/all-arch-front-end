const ProgressBanner: React.FC = () => {
    return (
        <div className='w-full h-fit bg-[#111] '>
            <div className='w-full h-full flex flex-col items-center justify-between gap-3 py-3 px-10'>
                <div className='w-full flex items-center justify-between text-white text-[0.73rem] font-semibold tracking-wide'>
                    <div className='flex items-center gap-5'>
                        <span className='bg-(--custom-text-red) py-1 px-3 rounded-3xl'>Stage 1 — Intern</span>
                        <span className='opacity-60 font-normal'>Progress to Stage 2</span>
                    </div>

                    <span className='text-(--custom-text-purple)'>0 / 500 XP</span>
                </div>

                <div className='w-full h-2 bg-[#FFFFFF1A] flex items-center justify-between rounded-3xl overflow-hidden'>
                    <div className='w-[32%] h-full bg-[#8B5CF6] rounded-3xl'></div>
                </div>
            </div>
        </div>
    )   
}

export default ProgressBanner
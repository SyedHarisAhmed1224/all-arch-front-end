const ResearcherBanner: React.FC = () => {
    return (
        <div
            style={{ background: 'linear-gradient(135deg, #0A0A0A, #1A0808)' }}
            className='w-full h-fit flex flex-col justify-center items-center gap-3 py-4'>
            <div className='w-full h-full flex items-center justify-between'>
                <div className='flex items-center justify-between gap-5'>
                    <div style={{ background: 'linear-gradient(135deg,#DC2626,#7f1d1d)' }} className='ml-10 w-13 h-13 flex items-center justify-center text-[1.5rem] rounded-4xl py-1 px-1'>
                        👨‍🔬
                    </div>

                    <div className='flex flex-col text-white'>
                        <span className='text-[1.2rem] font-semibold font-[lora]'>Dr. Ahmed Khan</span>
                        <span className='opacity-60 text-[0.8rem]'>Phase 1 Intern · MBBS · Public Health</span>
                    </div>
                </div>

                <div className='flex items-center justify-baseline gap-5 mr-10'>
                    <div className='min-w-17 w-fit h-full bg-[rgba(255,255,255,.06)] flex flex-col items-center justify-between py-2 px-4 rounded-xl border border-[rgba(255,255,255,.1)]'>
                        <span className='text-(--custom-text-red) font-[lora] text-[1.2rem]'>10</span>
                        <span className='text-white opacity-40 text-[0.7rem]'>Hearts</span>
                    </div>

                    <div className='min-w-17 w-fit h-full bg-[rgba(255,255,255,.06)] flex flex-col items-center justify-between py-2 px-4 rounded-xl border border-[rgba(255,255,255,.1)]'>
                        <span className='text-(--custom-text-purple) font-[lora] text-[1.2rem]'>0</span>
                        <span className='text-white opacity-40 text-[0.7rem]'>XP</span>
                    </div>

                    <div className='min-w-17 w-fit h-full bg-[rgba(255,255,255,.06)] flex flex-col items-center justify-between py-2 px-4 rounded-xl border border-[rgba(255,255,255,.1)]'>
                        <span className='text-[#FBBF24] font-[lora] text-[1.2rem]'>1</span>
                        <span className='text-white opacity-40 text-[0.7rem]'>Badges</span>
                    </div>

                    <div className='min-w-17 w-fit h-full bg-[rgba(255,255,255,.06)] flex flex-col items-center justify-between py-2 px-4 rounded-xl border border-[rgba(255,255,255,.1)]'>
                        <span className='text-(--client-top-bar-text-color) font-[lora] text-[1.2rem]'>0</span>
                        <span className='text-white opacity-40 text-[0.7rem]'>PKR</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearcherBanner
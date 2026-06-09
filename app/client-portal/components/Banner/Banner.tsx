const Banner: React.FC = () => {
    return (
        <div
            style={{ background: 'linear-gradient(135deg, var(--client-gradient-one), var(--client-gradient-two))' }}
            className='w-full h-full flex flex-col justify-center items-center gap-3 py-8'>
                <div className='text-white font-["lora"] text-[2rem] text-center px-5'>Research Services <span className='text-(--client-top-bar-text-color)'>Built For You</span></div>
                <div className='text-white opacity-50 w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%] text-center text-[0.95rem]'>
                    Select the services you need. Our verified researchers will take care of the rest — professionally and confidentially.
                </div>
        </div>
    )
}

export default Banner
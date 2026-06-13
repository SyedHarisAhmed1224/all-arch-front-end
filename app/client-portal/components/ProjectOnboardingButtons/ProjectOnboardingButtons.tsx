interface ProjectOnboardingButtonsProps {
    onBack: () => void
    handleContinue: () => void
    continueButton: boolean
    label?: string
}

const ProjectOnboardingButtons: React.FC<ProjectOnboardingButtonsProps> = ({ onBack, handleContinue, continueButton, label = 'Continue →' }) => {
    return (
        <div className='flex h-fit gap-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap'>
            <button onClick={onBack} className={`hover:border-red-600 hover:text-red-600 cursor-pointer border border-gray-300 w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mt-2 transition duration-200 ease-in-out h-fit font-semibold text-[1rem] py-2 rounded-3xl`}>← Back</button>
            <button onClick={handleContinue} className={`${continueButton ? 'bg-[#059669] text-white cursor-pointer' : 'bg-[#DDD8D0] text-[#6B6B6B] cursor-not-allowed'} w-full md:w-4/5 lg:w-4/5 xl:w-4/5 mt-2 transition duration-200 ease-in-out h-fit font-semibold text-[1rem] py-2 rounded-3xl`}>{label}</button>
        </div>
    )
}

export default ProjectOnboardingButtons
interface SubTitleProps {
    label: string
}

const SubTitle: React.FC<SubTitleProps> = ({ label }) => {
    return (
        <span className='w-fit uppercase py-1 px-3 rounded-[20px] bg-red-100 text-red-900 font-semibold text-[0.75rem] md:text-[0.8rem]'>
            {label}
        </span>
    )
}

export default SubTitle
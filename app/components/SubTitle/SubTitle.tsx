interface SubTitleProps {
    label: string
    darkBg?: boolean
}

const SubTitle: React.FC<SubTitleProps> = ({ label, darkBg = false }) => {
    return (
        <span className={`${darkBg ? 'bg-[#DC262633] text-[#ff8080]' : 'bg-red-100 text-red-900'} w-fit uppercase py-1 px-3 rounded-[20px] font-semibold text-[0.75rem] md:text-[0.8rem]`}>
            {label}
        </span>
    )
}

export default SubTitle
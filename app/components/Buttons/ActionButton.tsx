interface ActionButtonProps {
    title: string
}

const ActionButton: React.FC<ActionButtonProps> = ({ title }) => {
    return (
        <div className="w-full hover:scale-102 h-full bg-red-600 hover:bg-red-800 transition duration-200 cursor-pointer rounded-[50] flex items-center justify-center text-white font-bold">{title}</div>
    )
}

export default ActionButton
interface TextCardProps {
    superText: string
    subText?: string
}

const TextCard: React.FC<TextCardProps> = ({ superText, subText }) => {
    return (
        <div className="w-full h-full bg-white border-gray-300 border flex flex-col px-4 py-4 rounded-[10]">
            <span className="text-red-600 font-semibold text-[0.9rem]">{superText}</span>
            <span className="text-(--custom-sub-text-color) text-[0.9rem]">{subText}</span>
        </div>
    )
}

export default TextCard
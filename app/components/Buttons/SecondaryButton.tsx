interface SecondaryButtonProps {
    title: string
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ title }) => {
    return (
        <div className="w-full h-full border-gray-300 hover:border-(--custom-text-red) transition duration-200 ease-in-out cursor-pointer border rounded-[50] flex items-center justify-center text-(--custom-text-color) hover:text-(--custom-text-red) font-semibold">
            {title}
        </div>
    )
}

export default SecondaryButton
interface InputFieldProps {
    label: string
    placeholder?: string
    type?: 'text' | 'password' | 'email'
    onChange?: (val: string) => void
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder = '', type='text', onChange }) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <div className='w-full h-full flex flex-col gap-1 justify-between'>
            <label className='text-(--custom-text-color) font-semibold text-[0.9rem]' htmlFor="first-name">{label}</label>
            <input onChange={handleChange} type={type} placeholder={placeholder} className='py-2 px-3 border border-gray-300 rounded-xl' />
        </div>
    )
}

export default InputField
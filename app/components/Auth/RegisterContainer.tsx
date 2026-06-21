'use client'

import toast from 'react-hot-toast'
import FieldSelect from '../FieldSelect/FieldSelect'
import InputField from '../InputField/InputField'

interface RegisterContainerProps {
    onSubTextClick: () => void
}

const RegisterContainer: React.FC<RegisterContainerProps> = ({ onSubTextClick }) => {
    return (
        <div>
            <div className='w-full flex flex-col items-center justify-between px-5 gap-4 py-5'>
                <div className='w-full h-fit flex items-center justify-between gap-5'>
                    <InputField label='First Name' placeholder='e.g. Ahmed' />

                    <InputField label='Last Name' placeholder='e.g. Khan' />
                </div>

                <InputField label='Email Address' placeholder='you@example.com' type='email' />

                <FieldSelect />

                <InputField label='Password' placeholder='Min. 8 characters' type='password' />
            </div>

            <div className='w-full flex flex-col items-center justify-between px-5 gap-4 py-3'>
                <button onClick={() => { toast.success('Suck me daddy') }} className='w-full bg-(--custom-text-red) transition duration-300 ease-in-out hover:bg-red-700 cursor-pointer rounded-3xl py-2.5 font-semibold text-white text-[1rem]'>Create Account →</button>
                <div className='text-[0.9rem]'>
                    <span className='text-(--custom-text-color) opacity-70'>Already have an account? </span><span onClick={onSubTextClick} className='text-(--custom-text-red) font-semibold cursor-pointer'>Log in here</span>
                </div>
            </div>
        </div>
    )
}

export default RegisterContainer
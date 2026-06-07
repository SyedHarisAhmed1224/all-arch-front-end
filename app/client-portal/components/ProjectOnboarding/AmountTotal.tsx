import { useProjectStore } from '@/app/stores/useProjectStore'

const AmountTotal: React.FC = () => {
    const total = useProjectStore((state) => state.getTotalAmount())
    
    return (
        <div className='w-full flex justify-between items-center bg-[#111] py-3 px-5 rounded-xl'>
            <div className='flex flex-col'>
                <span className='text-white opacity-70 text-[0.8rem]'>Services Added So Far</span>
                <span className='text-white opacity-50 text-[0.7rem]'>No services added yet</span>
            </div>

            <div className='h-full text-(--client-top-bar-text-color) font-["lora"] text-[1.4rem]'>PKR {total}</div>
        </div>
    )
}

export default AmountTotal
'use client'

import FieldSelectArray from '@/app/components/FieldSelect/FieldSelectArray'
import { useRouter } from 'next/navigation'

interface ContractDashboardProps {
    allContractIDs: any[]
}

const ContractDashboard: React.FC<ContractDashboardProps> = ({ allContractIDs }) => {

    const router = useRouter()

    const handleContractChange = (contractId: number) => {
        if (contractId) {
            router.push(`/client-portal/view-contracts/${contractId}`)
        }
    }

    return (
        <div className='w-full h-full py-10 px-4 md:px-10 lg:px-20 xl:px-30 flex flex-col gap-5'>
            <FieldSelectArray label='All Contracts' fields={allContractIDs} prefix='Contract #' onChange={handleContractChange} />
        </div>
    )
}

export default ContractDashboard
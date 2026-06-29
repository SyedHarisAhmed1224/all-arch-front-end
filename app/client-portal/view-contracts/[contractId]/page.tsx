import { ClientServerService } from '@/app/services/Client/ClientServerService'
import ClientNavBar from '../../components/ClientNavBar/ClientNavBar'
import Header from '../../components/Header/Header'
import ViewContractBanner from '../components/ViewContractBanner/ViewContractBanner'
import ViewContractDashboard from '../components/ViewContractDashboard/ViewContractDashboard'

interface PageProps {
    params: Promise<{
        contractId: string
    }>
}

const ActiveContracts: React.FC<PageProps> = async ({ params }) => {

    const { contractId } = await params

    const contractInfo: ContractInfo = await ClientServerService.getContractInfo(parseInt(contractId))

    return (
        <>
            <div className='fixed w-full z-50'>
                <div className='w-full h-fit'>
                    <Header type='view-contract' />
                </div>
                <div>
                    <ClientNavBar navBarButtonSelected='/view-contracts' />
                </div>
            </div>
            <div className='w-full h-fit mt-25'>
                <ViewContractBanner contractInfo={contractInfo} />
            </div>
            <div className='w-full h-fit'>
                <ViewContractDashboard contractInfo={contractInfo} />
            </div>
        </>
    )
}

export default ActiveContracts
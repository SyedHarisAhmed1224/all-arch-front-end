import { ClientServerService } from '@/app/services/Client/ClientServerService'
import Header from '../components/Header/Header'
import ClientNavBar from '../components/ClientNavBar/ClientNavBar'
import Banner from '../components/Banner/Banner'
import ContractDashboard from './components/ContractsDashboard/ContractDashboard'

const Contracts: React.FC = async () => {

    const allContractIDs: number[] = await ClientServerService.getContracts()

    return (
        <>
            <div className='fixed w-full z-50'>
                <div className='w-full h-fit'>
                    <Header type='view-contract' />
                </div>
                <div>
                    <ClientNavBar navBarButtonSelected='/client-portal/view-contracts' />
                </div>
            </div>
            <div className='w-full h-fit mt-25'>
                <Banner />
            </div>
            <div className='w-full h-fit'>
                <ContractDashboard allContractIDs={allContractIDs} />
            </div>
        </>
    )
}

export default Contracts
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import ClientDashboardContent from './components/ClientDashboardContent/ClientDashboardContent'
import ClientNavBar from './components/ClientNavBar/ClientNavBar'
import { ClientServerService } from '../services/Client/ClientServerService'
import { ClientServicesCardType } from './components/ClientServicesCards/ClientServicesCard'

const ClientPortal: React.FC = async () => {
    const clientServicesCardsInfo: ClientServicesCardType[] = await ClientServerService.getServices()
    
    return (
        <>
            <div className='fixed w-full z-50'>
                <div className='w-full h-fit'>
                    <Header />
                </div>
                <div>
                    <ClientNavBar navBarButtonSelected='/client-portal' />
                </div>
            </div>
            <div className='w-full h-fit mt-25'>
                <Banner />
            </div>
            <div className='w-full h-fit'>
                <ClientDashboardContent clientServicesCardsInfo={clientServicesCardsInfo} />
            </div>
        </>
    )
}

export default ClientPortal
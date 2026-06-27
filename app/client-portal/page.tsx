import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import ClientDashboardContent from './components/ClientDashboardContent/ClientDashboardContent'

const ClientPortal: React.FC = () => {
    return (
        <>
            <div className='w-full h-fit'>
                <Header />
            </div>
            <div className='w-full h-fit'>
                <Banner />
            </div>
            <div className='w-full h-fit'>
                <ClientDashboardContent />
            </div>
        </>
    )
}

export default ClientPortal
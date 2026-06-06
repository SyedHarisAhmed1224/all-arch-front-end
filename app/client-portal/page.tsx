import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import DashboardContent from './components/DashboardContent/DashboardContent'

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
                <DashboardContent />
            </div>
        </>
    )
}

export default ClientPortal
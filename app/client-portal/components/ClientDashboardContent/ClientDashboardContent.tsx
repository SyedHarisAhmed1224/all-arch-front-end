import { ClientServicesCardType } from '../ClientServicesCards/ClientServicesCard'
import ClientServicesSelection from '../ClientServicesSelection/ClientServicesSelection'

interface ClientDashboardContentProps {
    clientServicesCardsInfo: ClientServicesCardType[]
}

const ClientDashboardContent: React.FC<ClientDashboardContentProps> = ({ clientServicesCardsInfo }) => {
    return (
        <div className='w-full h-full py-10 px-4 md:px-10 lg:px-20 xl:px-30 flex flex-col gap-5'>
            <span className='w-fit uppercase py-1 px-3 rounded-[20px] bg-red-100 text-red-900 font-semibold text-[0.8rem]'>Our Services</span>

            <h2 className='text-(--custom-text-color) font-["lora"] font-semibold text-[1.5rem]'>What we can do for you</h2>

            <p className='text-black opacity-70 text-[0.95rem]'>Select all that apply to your project. No payment details yet — just tell us what you need.</p>

            <div className='w-full h-fit'>
                <ClientServicesSelection clientServicesCardsInfo={clientServicesCardsInfo} />
            </div>
        </div>
    )
}

export default ClientDashboardContent
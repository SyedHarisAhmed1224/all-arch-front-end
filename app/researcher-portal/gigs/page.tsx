import ProgressBanner from '../components/Banner/ProgressBanner'
import ResearcherBanner from '../components/Banner/ResearcherBanner'
import GigsDashboard from '../components/GigsDashboard/GigsDashboard'
import ResearcherHeader from '../components/Header/ResearcherHeader'
import ResearcherNavBar from '../components/ResearcherNavBar/ResearcherNavBar'

const ResearcherPortalGigs: React.FC = () => {
    return (
        <>
            <div className='fixed w-full z-50'>
                <div className='w-full h-fit'>
                    <ResearcherHeader />
                </div>
                <div>
                    <ResearcherNavBar navBarButtonSelected='/researcher-portal/gigs' />
                </div>
            </div>
            <div className='w-full h-fit mt-25'>
                <ResearcherBanner />
            </div>
            <div className='w-full h-fit'>
                <ProgressBanner />
            </div>
            <div className='w-full h-fit'>
                <GigsDashboard />
            </div>
        </>
    )
}

export default ResearcherPortalGigs
import ProgressBanner from './components/Banner/ProgressBanner'
import ResearcherBanner from './components/Banner/ResearcherBanner'
import ResearcherHeader from './components/Header/ResearcherHeader'
import LearnDashboard from './components/LearnDashboard/LearnDashboard'
import ResearcherNavBar from './components/ResearcherNavBar/ResearcherNavBar'

const ResearcherPortal: React.FC = () => {
    return (
        <>
            <div className='fixed w-full z-50'>
                <div className='w-full h-fit'>
                    <ResearcherHeader />
                </div>
                <div>
                    <ResearcherNavBar navBarButtonSelected='/researcher-portal' />
                </div>
            </div>
            <div className='w-full h-fit mt-25'>
                <ResearcherBanner />
            </div>
            <div className='w-full h-fit'>
                <ProgressBanner />
            </div>
            <div className='w-full h-fit'>
                <LearnDashboard />
            </div>
        </>
    )
}

export default ResearcherPortal
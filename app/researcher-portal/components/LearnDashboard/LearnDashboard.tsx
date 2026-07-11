import ResearchFoundation from '../ResearchFoundation/ResearchFoundation'
import ResearchStages from '../ResearchStages/ResearchStages'
import StageInfo from '../StageInfo/StageInfo'

const LearnDashboard: React.FC = () => {
    return (
        <div className='py-5 px-10 lg:px-60 flex flex-col items-center justify-between gap-8'>
            <StageInfo />

            <ResearchFoundation />

            <ResearchStages/>
        </div>
    )
}

export default LearnDashboard
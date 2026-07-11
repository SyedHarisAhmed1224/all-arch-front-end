'use client'

import DataCollectionSection from './DataCollectionSection'
import GigsDashboardNav from './GigsDashboardNav'

const GigsDashboard: React.FC = () => {
    return (
        <div className='py-5 px-10 lg:px-60 flex flex-col items-center justify-between gap-8'>
            <GigsDashboardNav />

            <DataCollectionSection />
        </div>
    )
}

export default GigsDashboard
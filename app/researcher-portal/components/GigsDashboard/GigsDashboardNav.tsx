'use client'

import { useState } from 'react'

const GigsDashboardNav: React.FC = () => {

    const [selectedNavBar, setSelectedNavBar] = useState<number>(0)

    const toggleNavBar = (val: number) => {
        setSelectedNavBar(val)
    }

    return (
        <div className='w-full h-fit bg-[#EDE8E0] py-2 px-2 rounded-3xl flex items-center justify-center'>
            <button onClick={() => { toggleNavBar(0) }} className={`${selectedNavBar === 0 ? 'bg-white shadow-xl' : ''} font-semibold text-[0.85rem] cursor-pointer transition duration-200 ease-in-out flex items-center justify-center w-full rounded-3xl py-1 px-2`}>📊 Data Collection</button>
            <button onClick={() => { toggleNavBar(1) }} className={`${selectedNavBar === 1 ? 'bg-white shadow-xl' : ''} font-semibold text-[0.85rem] cursor-pointer transition duration-200 ease-in-out flex items-center justify-center w-full rounded-3xl py-1 px-2`}>📚 Edu Tasks</button>
        </div>
    )
}

export default GigsDashboardNav
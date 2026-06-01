import React from 'react'
import Marquee from '../components/Marquee/Marquee'
import NavBar from '../components/NavBar/NavBar'
import LandingPageContent from './components/LandingPageContent'

const Home: React.FC = () => {
    return (
        <div>
            <header className="sticky top-0 z-50">
                <Marquee />
                <NavBar />
            </header>
            <LandingPageContent />
        </div>
    )
}

export default Home

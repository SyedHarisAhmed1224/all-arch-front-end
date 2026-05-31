import React from 'react'
import Marquee from '../components/Marquee/Marquee'
import NavBar from '../components/NavBar/NavBar'
import LandingPageContent from './components/LandingPageContent'

const Home: React.FC = () => {
    return (
        <div>
            <header>
                <Marquee />
                <NavBar />
                <LandingPageContent />
            </header>
        </div>
    )
}

export default Home

'use client'

import React, { useState } from 'react'
import Marquee from '../components/Marquee/Marquee'
import NavBar from '../components/NavBar/NavBar'
import LandingPageContent from './components/LandingPageContent'
import AuthContainer from '../components/Auth/AuthContainer'
import ModalWrapper from '../client-portal/components/ModalWrapper/ModalWrapper'
import { AnimatePresence, motion } from 'framer-motion'

const Home: React.FC = () => {

    const [showAuth, setShowAuth] = useState<boolean>(false)

    const toggleAuth = () => {
        setShowAuth(!showAuth)
    }

    return (
        <div>
            {
                <AnimatePresence>
                    {showAuth && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-50"
                        >
                            <ModalWrapper>
                                <AuthContainer authType='login' toggleAuth={toggleAuth} />
                            </ModalWrapper>
                        </motion.div>
                    )}
                </AnimatePresence>
            }
            <header className="sticky top-0 z-30">
                <Marquee />
                <NavBar onAuthClick={toggleAuth} />
            </header>
            <LandingPageContent onAuthClick={toggleAuth} />
        </div>
    )
}

export default Home

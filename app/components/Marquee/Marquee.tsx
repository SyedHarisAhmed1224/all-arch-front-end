'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const items: NotificationItemProps[] = [
    {
        priority: 'low',
        superText: 'Dr. R. Hassan',
        subText: 'New article published in Pakistan Journal of Medical Sciences',
    },
    {
        priority: 'low',
        superText: 'ALLARCH Team',
        subText: 'Meta-analysis on diabetes prevalence published in IJMR',
    },
    {
        priority: 'high',
        superText: 'Phase 2 Exam',
        subText: 'Next exam scheduled. Registration open',
    },
    {
        priority: 'medium',
        superText: 'Authorship Slot Available',
        subText: 'Cohort study on maternal health (slot 2 of 5 open)',
    },
    {
        priority: 'low',
        superText: 'Dr. S. Mirza',
        subText: 'Article accepted: "Antibiotic resistance patterns in Karachi" — JPMA',
    },
    {
        priority: 'high',
        superText: 'Phase 3 Exam',
        subText: 'Results announced. Exam fee refunded for top scorers',
        addInfo: 'Fee-Based',
    },
    {
        priority: 'medium',
        superText: 'Authorship Slot Available',
        subText: 'RCT on pediatric nutrition — 2 slots open',
    },
    {
        priority: 'low',
        superText: 'ALLARCH Chief Researchers',
        subText: 'Systematic review on COVID outcomes published in NEJM',
    },
    {
        priority: 'low',
        superText: 'Dr. R. Hassan',
        subText: 'New article published in Pakistan Journal of Medical Sciences',
    },
    {
        priority: 'medium',
        superText: 'Authorship Slot Available',
        subText: 'Cross-sectional study on hypertension (slot 3 of 4 open)',
    },
    {
        priority: 'low',
        superText: 'ALLARCH Team',
        subText: 'Meta-analysis on diabetes prevalence published in IJMR',
    },
]

interface NotificationItemProps {
    priority: 'high' | 'medium' | 'low'
    superText: string
    subText: string
    addInfo?: string
}

const NotificationItem: React.FC<NotificationItemProps> = ({ priority, superText, subText, addInfo }) => {
    return (
        <div className='h-fit flex items-center justify-end gap-5' style={{ borderLeft: '1px solid #D6D6D6', paddingLeft: '50px', paddingRight: '10px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%' }} className={`${priority === 'high' ? 'bg-red-500' : priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
            <span style={{ fontFamily: 'sans-serif' }} className='font-bold text-[0.75rem]'>{superText}</span>
            <span style={{ fontFamily: 'sans-serif' }} className='text-[0.75rem]'>—</span>
            <span style={{ fontFamily: 'sans-serif' }} className='text-[0.75rem] text-[#D6D6D6]'>{subText}</span>
            {addInfo && <span style={{ fontFamily: 'sans-serif' }} className='text-[0.75rem] bg-blue-500 text-white px-2 rounded'>{addInfo}</span>}
        </div>
    )
}

const Marquee: React.FC = () => {
    const firstRowRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (firstRowRef.current) {
            setWidth(firstRowRef.current.offsetWidth)
        }
    }, [])

    return (
        <div className='w-full overflow-hidden bg-black text-white flex'>
            <div className='w-[180px] flex items-center justify-center bg-red-600 font-semibold font-sans text-[0.8rem] tracking-[0.07em] uppercase'>🔔 Live Updates</div>

            <div className='w-full overflow-hidden bg-black text-white'>
                <motion.div
                    className='flex whitespace-nowrap'
                    animate={{
                        x: ['0', -width],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: items.length * 30,
                            ease: 'linear',
                        },
                    }}
                >
                    <div
                        ref={firstRowRef}
                        className='flex shrink-0 gap-10 py-3 pr-10'
                    >
                        {items.map((item, i) => (
                            <NotificationItem key={i} {...item} />
                        ))}
                    </div>

                    <div className='flex shrink-0 gap-10 py-3 pr-10'>
                        {items.map((item, i) => (
                            <NotificationItem key={i} {...item} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Marquee
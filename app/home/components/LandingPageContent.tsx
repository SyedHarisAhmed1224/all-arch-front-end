import {
    researcherSubText,
    clientSubText,
    researcherInfo,
    clientInfo,
    phaseOneCard,
    phaseTwoCard,
    phaseThreeCard,
    phaseFourCard,
    researchServiceCards,
    rewardsCards
} from '@/app/constants/LandingPageData'

import ActionButton from '@/app/components/Buttons/ActionButton'
import SecondaryButton from '@/app/components/Buttons/SecondaryButton'
import PortalTypeInfoCards from '@/app/components/PortalTypeInfoCards/PortalTypeInfoCards'
import TextCard from '@/app/components/TextCard/TextCard'
import PhaseCard from '@/app/components/PhaseCard/PhaseCard'
import ResearchServiceCard, { ResearchServiceCardInfo } from '@/app/components/ResearchServiceCard/ResearchServiceCard'
import InterRewardCards, { InterRewardCardsInfo } from '@/app/components/InternRewardCards/InternRewardCards'

interface LandingPageContentProps {
    onAuthClick: (authType: number) => void
}

const LandingPageContent: React.FC<LandingPageContentProps> = ({ onAuthClick }) => {
    return (
        <>
            <div className='absolute text-red-600 opacity-5 font-bold text-[7rem] sm:text-[10rem] left-17 sm:left-134 top-118 sm:top-94 -z-1'>ARCH</div>
            <section className='w-full h-fit flex flex-col gap-5 py-5 px-5 sm:px-10 mt-15'>
                <div className='w-fit flex items-center justify-end gap-5'>
                    <span className='text-[1.05rem] text-red-600 font-serif'>بِسْمِ اللّٰهِ</span>
                    <span className='w-1 h-1 bg-gray-300 rounded-[50%]'></span>
                    <span className='font-bold mt-1 text-[10px] uppercase tracking-[0.25em] text-neutral-500'>The Hub of All Research</span>
                </div>

                <div className='font-semibold font-["lora"] text-(--custom-text-color) leading-13'>
                    <h1 style={{ fontSize: 'clamp(2.3rem,4.8vw,3.5rem)' }}>Learn research.</h1>
                    <h1 style={{ fontSize: 'clamp(2.3rem,4.8vw,3.5rem)' }}><span className='text-red-600'>Earn </span>while you grow.</h1>
                    <h1 style={{ fontSize: 'clamp(2.3rem,4.8vw,3.5rem)' }}>Get work done.</h1>
                </div>

                <div>
                    <p className='w-full max-w-117.5 text-gray-500 text-[1.02rem] font-sans md:w-117.5'>
                        ALLARCH is a dual-purpose platform — researchers train and earn through structured phases, while clients get expert research services delivered professionally.
                    </p>
                </div>

                <div className='flex gap-5 flex-wrap'>
                    <div>
                        <TextCard superText='MISSION' subText='To create the society of Muslim scientists' />
                    </div>
                    <div>
                        <TextCard superText='VISION' subText='To bring Islamic revolution from research' />
                    </div>
                </div>

                <div className='flex gap-5 flex-wrap'>
                    <div className='w-45 h-12.5'>
                        <ActionButton title='Get Started Free' />
                    </div>

                    <div className='w-47 h-12.5'>
                        <SecondaryButton title='See Both Portals ↓' />
                    </div>
                </div>

                <hr className='w-full sm:w-150 border-gray-400 mt-5' />

                <div className='w-full h-30 flex gap-8 mt-5 text-(--custom-text-color)'>
                    <div className='flex flex-col gap-1'>
                        <span className='font-["lora"] text-[2rem] font-semibold'>4</span>
                        <span className='text-[0.75rem] text-(--custom-sub-text-color) tracking-wider'>Learning phases</span>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <span className='font-["lora"] text-[2rem] font-semibold'>2</span>
                        <span className='text-[0.75rem] text-(--custom-sub-text-color) tracking-wider'>Dedicated portals</span>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <span className='font-["lora"] text-[2rem] font-semibold'>0</span>
                        <span className='text-[0.75rem] text-(--custom-sub-text-color) tracking-wider'>Phase 1 fee</span>
                    </div>
                </div>
            </section>

            <section className='w-fill h-fit bg-(--lp-portal-info-bg-color) flex flex-col gap-5 py-20 px-5 sm:px-10 items-center justify-center'>
                <div className='text-center'>
                    <span className='text-white text-[1.8rem] lg:text-[2.5rem] font-["lora"]'>Two Portal. </span>
                    <span className='text-(--custom-text-red) text-[1.8rem] lg:text-[2.5rem] font-["lora"]'>One Platform.</span>
                </div>

                <span className='text-white opacity-40 text-center text-[0.95rem]'>Sign up once and choose your path — learn & earn, or get your research done.</span>

                <div className='flex gap-6 mt-6 flex-wrap'>
                    <div className='w-full max-w-95 h-fit md:h-120 flex'>
                        <PortalTypeInfoCards onAuthClick={() => { onAuthClick(0) }} type='researcher' title='Researcher Portal' subText={researcherSubText} info={researcherInfo} icon='🎓' />
                    </div>

                    <div className='w-full max-w-95 h-fit md:h-120 flex'>
                        <PortalTypeInfoCards onAuthClick={() => { onAuthClick(0) }} type='client' title='Client Portal' subText={clientSubText} info={clientInfo} icon='💼' />
                    </div>
                </div>
            </section>

            <section className='w-full h-fit flex flex-col mt-20 px-5 sm:px-10'>
                <div className="flex flex-col items-start w-full md:px-0">
                    <span className='w-fit uppercase py-1 px-3 rounded-[20px] bg-red-100 text-red-900 font-semibold text-[0.75rem] md:text-[0.8rem]'>
                        Researcher Program
                    </span>

                    <h2 className='font-["lora"] text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] font-semibold mt-4 md:mt-5 text-(--custom-text-color) leading-tight max-w-2xl'>
                        Four Phases of Educational Program
                    </h2>

                    <p className='w-full max-w-md mt-3 text-[0.9rem] md:text-[1rem] text-(--custom-sub-text-color) leading-relaxed'>
                        Progress from field intern to chief researcher with defined milestones, rewards, and accountability.
                    </p>
                </div>

                <div className='flex flex-col items-center justify-center mt-8'>
                    <PhaseCard phaseCard={phaseOneCard} />
                </div>

                <div className='flex flex-col items-center justify-center mt-8'>
                    <PhaseCard phaseCard={phaseTwoCard} />
                </div>

                <div className='flex flex-col items-center justify-center mt-8'>
                    <PhaseCard phaseCard={phaseThreeCard} />
                </div>

                <div className='flex flex-col items-center justify-center mt-8'>
                    <PhaseCard switchTitleColors={true} phaseCard={phaseFourCard} />
                </div>
            </section>

            <section className='h-fit w-full flex flex-col mt-20 px-5 sm:px-10'>
                <span className='w-fit uppercase py-1 px-3 rounded-[20px] bg-red-100 text-red-900 font-semibold text-[0.8rem]'>Research Services</span>

                <span className='font-["lora"] text-[2rem] font-semibold mt-5 text-(--custom-text-color)'>What clients can get done</span>

                <span className='w-full sm:w-125 mt-3 text-(--custom-sub-text-color)'>Verified ALLARCH researchers deliver professional work across all major research types and disciplines.</span>

                <div className='w-full h-fit mt-10 flex flex-wrap items-center justify-center sm:justify-between gap-5'>
                    {researchServiceCards.map((card: ResearchServiceCardInfo, index: number) => {
                        return (
                            <ResearchServiceCard key={index} cardInfo={card} />
                        )
                    })}
                </div>
            </section>

            <section className='h-fit w-full flex flex-col mt-20 px-5 sm:px-10'>
                <span className='w-fit uppercase py-1 px-3 rounded-[20px] bg-red-100 text-red-900 font-semibold text-[0.8rem]'>Intern Rewards</span>

                <span className='font-["lora"] text-[2.1rem] sm:text-[2rem] font-semibold mt-5 text-(--custom-text-color)'>Earn per query in Phase 1</span>

                <span className='w-full sm:w-125 mt-3 text-(--custom-sub-text-color)'>The more complex the study, the higher your reward — with zero membership fee to start.</span>

                <div className='flex mt-10 gap-5 flex-wrap w-full'>
                    {rewardsCards.map((card: InterRewardCardsInfo, index: number) => {
                        return (
                            <InterRewardCards cardInfo={card} key={index} />
                        )
                    })}
                </div>
            </section>

            <section className='h-fit w-full flex flex-col mt-20 px-5 sm:px-10 bg-(--custom-text-red) items-center justify-center gap-3 py-20'>
                <div className='uppercase text-white bg-[rgba(255,255,255,.2)] rounded-2xl py-1 px-3 text-[0.8rem] font-semibold'>
                    Join Today
                </div>

                <span className='text-white font-["lora"] text-[2.2rem] font-semibold text-center leading-10'>One sign-up. Two powerful portals.</span>

                <span className='w-full sm:w-fit text-center text-white opacity-70 sm:text-[1rem]'>Whether you're here to learn, earn, or get your project professionally <br /> done — ALLARCH has a portal for you.</span>

                <div className='flex items-center justify-center w-full h-fit gap-5 mt-7 flex-wrap'>
                    <button className='bg-white text-red-800 font-semibold py-2 px-8 rounded-3xl cursor-pointer hover:-translate-y-1 transition duration-200 ease-in-out'>Join as Researcher</button>
                    <button className='text-white border-2 border-gray-400 hover:border-white transition duration-200 ease-in-out cursor-pointer hover:-translate-y-1 font-semibold py-2 px-8 rounded-3xl'>Hire a Researcher</button>
                </div>
            </section>

            <footer className='h-fit w-full bg-(--lp-portal-info-bg-color) px-5 sm:px-10 flex flex-col'>
                <div className='flex flex-col sm:flex-row mt-7 gap-15 w-full'>
                    <div className='flex flex-col w-full sm:w-[60%]'>
                        <div className='text-white font-semibold text-[1.5rem]'>ALL<span className='text-(--custom-text-red)'>ARCH</span></div>
                        <p className="mt-1 text-[0.68rem] uppercase tracking-[0.25em] text-white opacity-30">
                            The Hub of All Research
                        </p>
                        <span className='text-white opacity-40 text-[0.9rem] mt-2'>
                            A dual-purpose research platform. Train, earn, and publish as a researcher — or get professional research services as a client.
                        </span>
                    </div>

                    <div className='flex flex-col w-full sm:w-1/3'>
                        <span className='text-white font-semibold'>Programs</span>
                        <div className='flex flex-col gap-3 mt-5 text-white opacity-35 font-light text-[0.85rem] tracking-[0.05rem]'>
                            <span>Phase 1 — Intern</span>
                            <span>Phase 2 — Junior</span>
                            <span>Phase 3 — Senior</span>
                            <span>Phase 4 — Chief</span>
                            <span>Meta Masters</span>
                        </div>
                    </div>

                    <div className='flex flex-col w-full sm:w-1/3'>
                        <span className='text-white font-semibold'>Services</span>
                        <div className='flex flex-col gap-3 mt-5 text-white opacity-35 font-light text-[0.85rem] tracking-[0.05rem]'>
                            <span>Whole Research Package</span>
                            <span>Segmented Services</span>
                            <span>Statistical Analysis</span>
                            <span>Article Writing</span>
                            <span>Journal Submission</span>
                        </div>
                    </div>

                    <div className='flex flex-col w-full sm:w-1/3'>
                        <span className='text-white font-semibold'>Programs</span>
                        <div className='flex flex-col gap-3 mt-5 text-white opacity-35 font-light text-[0.85rem] tracking-[0.05rem]'>
                            <span>Phase 1 — Intern</span>
                            <span>Phase 2 — Junior</span>
                            <span>Phase 3 — Senior</span>
                            <span>Phase 4 — Chief</span>
                            <span>Meta Masters</span>
                        </div>
                    </div>
                </div>

                <hr className='border border-white opacity-10 mt-11' />

                <div className='sm:flex items-center justify-between text-white opacity-50 text-[0.83rem] mt-5 mb-10'>
                    <div>© 2025 ALLARCH — The Hub of All Research. All rights reserved.</div>
                    <div className='mt-2 sm:mt-0'>Built with purpose.</div>
                </div>
            </footer>
        </>
    )
}

export default LandingPageContent
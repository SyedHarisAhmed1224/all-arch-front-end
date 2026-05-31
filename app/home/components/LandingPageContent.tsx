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

const LandingPageContent: React.FC = () => {
    return (
        <>
            <div className='absolute text-red-600 opacity-5 font-bold text-[10rem] left-134 top-94 -z-1'>ARCH</div>
            <section className='w-full h-fit flex flex-col gap-5 py-5 px-10 mt-15'>
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
                    <p className='w-117.5 text-gray-500 text-[1.02rem] font-sans'>ALLARCH is a dual-purpose platform — researchers train and earn through structured phases, while clients get expert research services delivered professionally.</p>
                </div>

                <div className='flex gap-5'>
                    <div className='w-67.5'>
                        <TextCard superText='MISSION' subText='To create the society of Muslim scientists' />
                    </div>
                    <div>
                        <TextCard superText='VISION' subText='To bring Islamic revolution from research' />
                    </div>
                </div>

                <div className='flex gap-5'>
                    <div className='w-45 h-12.5'>
                        <ActionButton title='Get Started Free' />
                    </div>

                    <div className='w-47 h-12.5'>
                        <SecondaryButton title='See Both Portals ↓' />
                    </div>
                </div>

                <hr className='w-150 border-gray-400 mt-5' />

                <div className='w-full h-30 flex gap-8 mt-5'>
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

            <section className='w-fill h-fit bg-(--lp-portal-info-bg-color) flex flex-col gap-5 py-20    px-10 items-center justify-center'>
                <div>
                    <span className='text-white text-[1.8rem] font-["lora"]'>Two Portal. </span>
                    <span className='text-(--custom-text-red) text-[1.8rem] font-["lora"]'>One Platform.</span>
                </div>

                <span className='text-mist-400'>Sign up once and choose your path — learn & earn, or get your research done.</span>

                <div className='flex gap-6 mt-6'>
                    <div className='w-95 h-120 flex'>
                        <PortalTypeInfoCards type='researcher' title='Researcher Portal' subText={researcherSubText} info={researcherInfo} icon='🎓' />
                    </div>

                    <div className='w-95 h-120 flex'>
                        <PortalTypeInfoCards type='client' title='Client Portal' subText={clientSubText} info={clientInfo} icon='💼' />
                    </div>
                </div>
            </section>

            <section className='w-full h-fit flex flex-col mt-20 px-10'>
                <span className='w-fit uppercase py-1 px-3 rounded-[20px] bg-red-100 text-red-900 font-semibold text-[0.8rem]'>Researcher Program</span>

                <span className='font-["lora"] text-[2rem] font-semibold mt-5'>Four Phases of Educational Program</span>

                <span className='w-125 mt-3 text-(--custom-sub-text-color)'>Progress from field intern to chief researcher with defined milestones, rewards, and accountability.</span>

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

            <section className='h-fit w-full flex flex-col mt-20 px-10'>
                <span className='w-fit uppercase py-1 px-3 rounded-[20px] bg-red-100 text-red-900 font-semibold text-[0.8rem]'>Research Services</span>

                <span className='font-["lora"] text-[2rem] font-semibold mt-5'>What clients can get done</span>

                <span className='w-125 mt-3 text-(--custom-sub-text-color)'>Verified ALLARCH researchers deliver professional work across all major research types and disciplines.</span>

                <div className='w-full h-fit mt-10 flex flex-wrap items-center justify-center gap-5'>
                    {researchServiceCards.map((card: ResearchServiceCardInfo, index: number) => {
                        return (
                            <ResearchServiceCard key={index} cardInfo={card} />
                        )
                    })}
                </div>
            </section>

            <section className='h-fit w-full flex flex-col mt-20 px-10'>
                <span className='w-fit uppercase py-1 px-3 rounded-[20px] bg-red-100 text-red-900 font-semibold text-[0.8rem]'>Intern Rewards</span>

                <span className='font-["lora"] text-[2rem] font-semibold mt-5'>Earn per query in Phase 1</span>

                <span className='w-125 mt-3 text-(--custom-sub-text-color)'>The more complex the study, the higher your reward — with zero membership fee to start.</span>

                <div className='flex mt-10 gap-5'>
                    {rewardsCards.map((card: InterRewardCardsInfo, index: number) => {
                        return (
                            <InterRewardCards cardInfo={card} key={index} />
                        )
                    })}
                </div>
            </section>

            <section className='h-[30vw] w-full flex flex-col mt-20 px-10 bg-(--custom-text-red) flex flex-col items-center justify-center'>
                <div className='uppercase text-white bg-[rgba(255,255,255,.2)] rounded-2xl py-1 px-3 text-[0.8rem] font-semibold'>
                    Join Today
                </div>
            </section>
        </>
    )
}

export default LandingPageContent
interface BannerCardsProps {
    title: string
    subText: string
}

const BannerCards: React.FC<BannerCardsProps> = ({ title, subText }) => {
    return (
        <div className='flex flex-col gap-2 items-center justify-center py-3 px-14 lg:px-30 bg-[#FFFFFF12] border border-[#FFFFFF20] rounded-2xl'>
            <span className='text-(--client-top-bar-text-color) font-semibold font-[lora] text-[1.5rem]'>{title}</span>
            <span className='text-white opacity-50 text-[0.7rem]'>{subText}</span>
        </div>
    )
}

interface ViewContractBannerProps {
    contractInfo: ContractInfo
}

const ViewContractBanner: React.FC<ViewContractBannerProps> = ({ contractInfo }) => {

    return (
        <div
            style={{ background: 'linear-gradient(135deg, var(--client-gradient-one), var(--client-gradient-two))' }}
            className='w-full h-fit flex flex-col gap-5 py-8 px-5 lg:px-25 text-white'>
                <h1 className='font-[lora] text-[1.7rem] font-semibold'>Project Dashboard</h1>
                <span className='opacity-50'>Welcome, ssf (BSc) — your project is now active.</span>

                <div className='w-full flex items-center justify-between'>
                    <BannerCards title={contractInfo.serviceCount.toString()} subText='Services Requested' />
                    <BannerCards title={contractInfo.totalAmount.toString()} subText='50% Advance Due' />
                    <BannerCards title={contractInfo.responseTime} subText='Team Response Time' />
                    <BannerCards title={contractInfo.contractStatus} subText='Project Status' />
                </div>
        </div>
    )
}

export default ViewContractBanner
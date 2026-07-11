'use client'

import FieldSelectArray from '@/app/components/FieldSelect/FieldSelectArray'
import { useRouter } from 'next/navigation'

interface ProjectTimeLineComponentProps {
    progress: 'waiting' | 'completed' | 'in-progress' | 'final'
    label: string
    description: string
}

const ProjectTimeLineComponent: React.FC<ProjectTimeLineComponentProps> = ({ progress, label, description }) => {
    return (
        <div className='w-full h-fit flex gap-5 py-5 px-5 text-(--custom-text-color) items-center justify-between'>
            <div className='w-fit h-fit flex flex-col items-center justify-between gap-1'>
                <div className={`${progress === 'completed' ? 'bg-(--client-text-green)' : progress === 'in-progress' ? 'bg-[#3B82F6]' : 'bg-[#DDD8D0]'} w-3 h-3 rounded-3xl`}></div>
                {
                    progress !== 'final' &&
                    <div className={`${progress === 'completed' ? 'bg-(--client-text-green)' : progress === 'in-progress' ? 'bg-[#DBEAFE]' : 'bg-[#DDD8D0]'} w-0.5 h-8 bg-(--client-text-green) rounded-3xl`}></div>
                }
            </div>

            <div className='w-full flex flex-col'>
                <span className='font-semibold'>{label}</span>
                <span className='text-[0.8rem] opacity-80'>{description}</span>
            </div>
        </div>
    )
}

interface RequestedServicesProps {
    icon: string
    title: string
    description: string
    progress: 'in-queue' | 'waiting' | 'completed'
    progressBarValue?: string
}

const RequestedServices: React.FC<RequestedServicesProps> = ({ icon, title, description, progress, progressBarValue }) => {
    return (
        <div className='w-full h-fit bg-white rounded-2xl flex gap-5 py-5 px-5 text-(--custom-text-color) items-center justify-between'>
            <div className={`${progress === 'waiting' ? 'bg-[#EDE8E0]' : 'bg-[#DBEAFE]'} w-12 h-12 text-[1rem] md:text-[1.2rem] flex items-center justify-center py-1 md:py-3 px-3 md:px-3 rounded-xl`}>{icon}</div>

            <div className='w-full h-full flex flex-col items-start justify-between gap-2'>
                <span className='font-semibold'>{title}</span>
                <span className='text-[0.8rem] opacity-70'>{description}</span>

                <div className='w-full h-2 rounded-3xl bg-[#DDD8D0] overflow-hidden'>
                    {progressBarValue && <div className={`w-[${progressBarValue}%] h-2 bg-(--client-text-green)`}></div>}
                </div>
            </div>

            <div className={`${progress === 'in-queue' ? 'text-[#1e40af] bg-[#DBEAFE]' : 'text-[#6B6B6B] bg-[#EDE8E0]'} w-25 h-full px-2 py-1 text-[0.6rem] md:text-[0.8rem] text-center text-[#1e40af] bg-[#DBEAFE] rounded-3xl font-bold`}>
                {progress === 'in-queue' ? 'In Queue' : 'Waiting'}
            </div>
        </div>
    )
}

interface ViewContractDashboardProps {
    contractInfo: ContractInfo
    allContractIDs: number[]
}

const ViewContractDashboard: React.FC<ViewContractDashboardProps> = ({ contractInfo, allContractIDs }) => {

    const router = useRouter()

    const handleContractChange = (contractId: number) => {
        if (contractId) {
            router.push(`/client-portal/view-contracts/${contractId}`)
        }
    }

    return (
        <div className='w-full h-full py-10 px-4 md:px-10 lg:px-20 xl:px-30 flex flex-col gap-5'>

            <FieldSelectArray label='All Contracts' fields={allContractIDs} prefix='Contract #' onChange={handleContractChange} />

            <h1 className='uppercase font-semibold text-(--custom-text-color) opacity-80 text-[0.9rem] tracking-wide'>Payment Summary</h1>

            <div className='w-full h-fit bg-white rounded-2xl flex flex-col gap-3 py-5 px-5 text-(--custom-text-color)'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-start justify-between gap-2 text-[0.8rem] md:text-[0.9rem]'>
                        <span className='font-semibold'>50% Advance Due Now</span>
                        <span>Remaining 50% due on delivery</span>
                    </div>
                    <div className='text-(--client-text-green) font-semibold text-[1.2rem] md:text-[1.5rem] font-[lora]'>
                        PKR {contractInfo.advanceAmount}
                    </div>
                </div>

                {
                    contractInfo.topicAmount !== 0 &&

                    <div className='flex items-center justify-between'>
                        <span>Research Topic</span>
                        <span className='text-(--client-text-green)'>PKR {contractInfo.topicAmount}</span>
                    </div>
                }

                {
                    contractInfo.protocolAmount !== 0 &&

                    <div className='flex items-center justify-between'>
                        <span>Protocol/Synopsis</span>
                        <span className='text-(--client-text-green)'>PKR {contractInfo.protocolAmount}</span>
                    </div>
                }

                {
                    contractInfo.dataAmount !== 0 &&

                    <div className='flex items-center justify-between'>
                        <span>Data Collection</span>
                        <span className='text-(--client-text-green)'>PKR {contractInfo.dataAmount}</span>
                    </div>
                }

                {
                    contractInfo.thesisAmount !== 0 &&

                    <div className='flex items-center justify-between'>
                        <span>Written Output</span>
                        <span className='text-(--client-text-green)'>PKR {contractInfo.thesisAmount}</span>
                    </div>
                }

                {
                    contractInfo.presentationAmount !== 0 &&

                    <div className='flex items-center justify-between'>
                        <span>Presentation</span>
                        <span className='text-(--client-text-green)'>PKR {contractInfo.presentationAmount}</span>
                    </div>
                }

                <div className='flex items-center justify-between border-t border-t-gray-300 py-3'>
                    <span className='font-semibold'>Total</span>
                    <span className='text-(--client-text-green) font-semibold text-[1.2rem]'>PKR {contractInfo.totalAmount}</span>
                </div>
            </div>

            <button className='tranistion duration-300 hover:bg-(--client-text-green-hover) cursor-pointer w-full bg-(--client-text-green) text-white py-3 rounded-3xl font-semibold text-[1rem]'>
                Pay Advance — PKR {contractInfo.advanceAmount} →
            </button>

            <h1 className='uppercase font-semibold text-(--custom-text-color) opacity-80 text-[0.9rem] tracking-wide'>Project Progress</h1>

            {
                contractInfo.topicAmount !== 0 &&

                <div className='w-full h-fit'>
                    <RequestedServices icon='💡' title='Research Topic' description='Research subject' progress='in-queue' progressBarValue='50' />
                </div>
            }

            {
                contractInfo.protocolAmount !== 0 &&

                <div className='w-full h-fit'>
                    <RequestedServices icon='📋' title='Protocol/Synopsis' description='Protocol writing + objections' progress='in-queue' progressBarValue='50' />
                </div>
            }

            {
                contractInfo.dataAmount !== 0 &&

                <div className='w-full h-fit'>
                    <RequestedServices icon='📊' title='Data Collection' description='Field data collection' progress='waiting' />
                </div>
            }

            {
                contractInfo.thesisAmount !== 0 &&

                <div className='w-full h-fit'>
                    <RequestedServices icon='📝' title='Written Output' description='Article or Thesis' progress='waiting' />
                </div>
            }
            
            {
                contractInfo.presentationAmount !== 0 &&

                <div className='w-full h-fit'>
                    <RequestedServices icon='🎤' title='Presentation' description='Presentation of the research' progress='waiting' />
                </div>
            }

            <div className='w-full h-fit'>
                <div className='w-full h-fit bg-white rounded-2xl flex gap-5 py-3 px-5 text-(--custom-text-color) items-center justify-center'>
                    <span className='text-[0.9rem] opacity-80'>🔒 Progress updates will appear here once advance payment is confirmed.</span>
                </div>
            </div>

            <h1 className='uppercase font-semibold text-(--custom-text-color) opacity-80 text-[0.9rem] tracking-wide'>Project Timeline</h1>

            <div className='w-full h-fit bg-white rounded-2xl'>

                <ProjectTimeLineComponent progress='completed' label='Contract Signed' description='Agreement accepted & services selected' />
                <ProjectTimeLineComponent progress='in-progress' label='Advance Payment' description='50% advance payment pending confirmation' />
                <ProjectTimeLineComponent progress='waiting' label='Team Assigned' description='ALLARCH researcher assigned to your project' />
                <ProjectTimeLineComponent progress='waiting' label='Work Begins' description='Research services commence' />
                <ProjectTimeLineComponent progress='waiting' label='Progress Updates' description='Milestone reports via dashboard & email' />
                <ProjectTimeLineComponent progress='final' label='Final Delivery' description='Completed work delivered, final 50% due' />

            </div>
        </div>
    )
}

export default ViewContractDashboard
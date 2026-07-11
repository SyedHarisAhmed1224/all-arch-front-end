'use client'

import { useRouter } from 'next/navigation'

interface NavBarButtonProps {
    icon: string
    label: string
    link?: string
    selected: boolean
}

const NavBarButton: React.FC<NavBarButtonProps> = ({icon, label, link='', selected}) => {

    const router = useRouter()

    const handleRouteChange = () => {
        router.push(link)
    }

    return (
        <div onClick={handleRouteChange} className={`${selected ? 'border-b-2 border-b-(--custom-text-red)' : 'opacity-50 transition duration-300 ease-in-out hover:opacity-80'} cursor-pointer w-full h-full flex items-center justify-between gap-3 text-[0.8rem] font-semibold px-3`}>
            <span>{icon}</span>
            <span>{label}</span>
        </div>
    )
}

const navBarButtons: Record<string, any>[] = [
    {
        icon: '🛠️',
        label: 'New Research Contract',
        link: '/client-portal',
    },
    {
        icon: '📜',
        label: 'View Contracts',
        link: '/client-portal/view-contracts',
    },
    {
        icon: '👤',
        label: 'User',
        link: '/client-portal/client-user-info',
    }
]

interface ClientNavBarProps {
    navBarButtonSelected: '/client-portal' | '/client-portal/view-contracts' | '/client-portal/client-user-info'
}

const ClientNavBar: React.FC<ClientNavBarProps> = ({ navBarButtonSelected }) => {
    return (
        <div className='w-full h-10 bg-(--lp-portal-info-bg-color) flex items-center justify-start text-white px-1 md:px-23'>
            {navBarButtons.map((item: Record<string, any>, index) => {
                return (
                    <div key={index} className='w-fit h-full'>
                        <NavBarButton icon={item.icon} label={item.label} link={item.link} selected={item.link === navBarButtonSelected} />
                    </div>
                )
            })}
        </div>
    )
}

export default ClientNavBar
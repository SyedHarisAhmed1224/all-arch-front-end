export interface ProjectOnboardServiceData {
    id: number
    icon: string
    title: string
    info: string
    status: 'confirm' | 'provided' | 'self' | 'applied' | 'no'
}
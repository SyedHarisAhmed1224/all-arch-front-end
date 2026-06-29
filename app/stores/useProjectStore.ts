import { create } from 'zustand'

interface Service {
    serviceId: number
    title: string
    amount: number
}

interface ProjectStore {
    services: Record<number, boolean>
    prices: Record<number, number>

    initializePrices: (services: Service[]) => void
    setService: (serviceId: number, value: boolean) => void
    getTotalAmount: () => number

    resetSelections: () => void
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
    services: {},
    prices: {},

    initializePrices: (services) =>
        set({
            prices: Object.fromEntries(
                services.map((s) => [s.serviceId, s.amount])
            ),
        }),

    setService: (serviceId, value) =>
        set((state) => ({
            services: {
                ...state.services,
                [serviceId]: value,
            },
        })),

    getTotalAmount: () => {
        const { services, prices } = get()

        return Object.entries(services).reduce(
            (total, [serviceId, selected]) =>
                selected
                    ? total + (prices[Number(serviceId)] || 0)
                    : total,
            0
        )
    },

    resetSelections: () =>
        set({
            services: {},
        }),
}))
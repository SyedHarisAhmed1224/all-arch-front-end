import { create } from 'zustand'

export const SERVICE_PRICES = {
    topicFormulation: 5000,
    protocolWriting: 20000,
    dataCollection: 30000,
    statisticsAnalysis: 15000,
    manuscriptWriting: 25000,
    literatureReview: 12000,
    questionnaireDesign: 8000,
    ethicsApprovalSupport: 18000,
    dataEntry: 7000,
    publicationSupport: 30000,
} as const

type ServiceName = keyof typeof SERVICE_PRICES

interface ProjectStore {
    services: Record<ServiceName, boolean>

    setService: (
        service: ServiceName,
        value: boolean
    ) => void

    getTotalAmount: () => number
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
    services: {
        topicFormulation: false,
        protocolWriting: false,
        dataCollection: false,
        statisticsAnalysis: false,
        manuscriptWriting: false,
        literatureReview: false,
        questionnaireDesign: false,
        ethicsApprovalSupport: false,
        dataEntry: false,
        publicationSupport: false,
    },

    setService: (service, value) =>
        set((state) => ({
            services: {
                ...state.services,
                [service]: value,
            },
        })),

    getTotalAmount: () => {
        const { services } = get()

        return Object.entries(services).reduce(
            (total, [service, selected]) =>
                selected
                    ? total +
                      SERVICE_PRICES[
                          service as ServiceName
                      ]
                    : total,
            0
        )
    },
}))
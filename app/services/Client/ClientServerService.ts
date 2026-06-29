import { ClientServicesCardType } from '@/app/client-portal/components/ClientServicesCards/ClientServicesCard'
import apiClient from "../apiClient"
import { Conversions } from "@/app/util/Conversions"
import { cookies } from 'next/headers'

export const ClientServerService = {
    getServices: async (): Promise<ClientServicesCardType[]> => {
        const cookieStore = await cookies()

        const cookieHeader = cookieStore
            .getAll()
            .map(c => `${c.name}=${c.value}`)
            .join('; ')

        const response = await apiClient.get(
            '/client/get-services',
            {
                headers: {
                    Cookie: cookieHeader,
                },
            }
        )

        const data = response.data

        return data.body.map((item: ClientServicesCardType) => ({
            ...item,
            icon: Conversions.unicodeToEmoji(item.icon),
        }))
    },

    getContractInfo: async (contractId: number): Promise<ContractInfo> => {
        const cookieStore = await cookies()

        const cookieHeader = cookieStore
            .getAll()
            .map(c => `${c.name}=${c.value}`)
            .join('; ')

        const response = await apiClient.get(
            `/client/get-contract-info?contract_id=${contractId}`,
            {
                headers: {
                    Cookie: cookieHeader,
                },
            }
        )

        const data = response.data

        return data.body
    }
}
import { ContractBody } from '@/app/types/ContractBody'
import apiClient from '../apiClient'
import axios from 'axios'

export const ClientService = {
    lodgeNewContractRequest: async (contractBody: ContractBody): Promise<BackendResponse | null> => {
        try {
            const response = await apiClient.post(
                '/client/insert-new-research-contract',
                contractBody
            )

            return response.data
        } catch (err) {
            console.error("FULL ERROR:", err)

            if (axios.isAxiosError(err)) {
                console.error("MESSAGE:", err.message)
                console.error("CODE:", err.code)
                console.error("RESPONSE:", err.response)
            }

            throw err
        }
    }
}
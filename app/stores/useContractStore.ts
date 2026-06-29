import { create } from 'zustand'
import {
    ContractBody,
    defaultContractBody
} from '@/app/types/ContractBody'

interface ContractStore {
    contractBody: ContractBody

    updateContractBody: (
        data: Partial<ContractBody>
    ) => void

    resetContractBody: () => void
}

export const useContractStore =
    create<ContractStore>((set) => ({
        contractBody: defaultContractBody,

        updateContractBody: (data) =>
            set((state) => ({
                contractBody: {
                    ...state.contractBody,
                    ...data,
                },
            })),

        resetContractBody: () =>
            set({
                contractBody: defaultContractBody,
            }),
    }))
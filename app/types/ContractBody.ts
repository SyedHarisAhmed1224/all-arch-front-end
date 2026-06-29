export interface ContractBody {
    researchSupportAgreement: number
    qualificationID: number

    hasTopic: number

    hasProtocol: number
    protocolFile: string

    hasData: number
    dataFile: string

    writtenOutputTypeID: number
    targetJournal: string

    hasPresentation: number

    fullName: string
    digitalSignature: string

    personalInfoFullName: string
    fieldDescription: string
    researchDescription: string
}

export const defaultContractBody: ContractBody = {
    researchSupportAgreement: 0,
    qualificationID: -1,

    hasTopic: -1,

    hasProtocol: -1,
    protocolFile: '',

    hasData: -1,
    dataFile: '',

    writtenOutputTypeID: -1,
    targetJournal: '',

    hasPresentation: -1,

    fullName: '',
    digitalSignature: '',

    personalInfoFullName: '',
    fieldDescription: '',
    researchDescription: '',
}
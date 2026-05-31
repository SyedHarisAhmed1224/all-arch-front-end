import { PhaseCardInfo } from '@/app/components/PhaseCard/PhaseCard'
import { ResearchServiceCardInfo } from '../components/ResearchServiceCard/ResearchServiceCard'
import { InterRewardCardsInfo } from '../components/InternRewardCards/InternRewardCards'

export const researcherSubText =
    'Join the ALLARCH Academy program. Gain real research skills across 4 structured phases and earn a stipend as you grow.'

export const clientSubText =
    'Post your research project and get it done by verified ALLARCH researchers — professional, reliable, and fully managed.'

export const researcherInfo: string[] = [
    '4-phase training: Intern → Chief Researcher',
    'Earn stipend from Phase 1 — no fee to join',
    'Authorship slots in published articles',
    'Supervise and mentor others',
    'Work on real, live research projects'
]

export const clientInfo: string[] = [
    'Whole research package from 1.5L/6 months',
    'Segmented services — pay only for what you need',
    'Topic formulation to journal publication',
    'Reduce price by sharing authorship slots',
    'Separate documents: info sheet, consent, SPSS & more'
]

export const phaseOneCard: PhaseCardInfo = {
    phaseNumber: '01',
    phaseCategory: 'Entry Level',
    phaseTitle: 'Field Work — Intern',
    firstColumnTitle: 'What you learn',
    firstColumnList: [
        'Data Collection & organization',
        'SPSS & Excel basics',
        'Variable characterization',
        'Questionnaire design',
        'Study limitations'
    ],
    secondColumnTitle: 'Objectives',
    secondColumnList: [
        'Complete 5 study data collections',
        'Monthly educational tasks',
        'Stipend paid per query'
    ],
    thirdColumnInfo: 'Auto-eligible for Junior Researcher after 6 months.',
    metaPillList: [
        '6 Months',
        'No Fee',
        'Stipend'
    ]
}

export const phaseTwoCard: PhaseCardInfo = {
    phaseNumber: '02',
    phaseCategory: 'Junior Level',
    phaseTitle: 'Table Work — Junior Researcher',
    firstColumnTitle: 'What you learn',
    firstColumnList: [
        'Topic formulation',
        'Synopsis writing (5+)',
        'Sample size calculation',
        'Statistical protocol',
        'Literature search',
        'Intern supervision'
    ],
    secondColumnTitle: 'Required',
    secondColumnList: [
        '10 synopsis writings',
        '4 cross-sectional studies',
        '3 case-control studies',
        '2 cohort studies',
        '1 RCT study'
    ],
    metaPillList: [
        '3 Months',
        '2k/month',
        'Variable Rewards'
    ]
}

export const phaseThreeCard: PhaseCardInfo = {
    phaseNumber: '03',
    phaseCategory: 'Senior Level',
    phaseTitle: 'Project Work — Senior Researcher',
    firstColumnTitle: 'What you learn',
    firstColumnList: [
        'Article writing (5+)',
        'Advanced data analysis',
        'Bias identification',
        'Junior researcher supervision'
    ],
    secondColumnTitle: 'Rewards',
    secondColumnList: [
        'Paid synopsis (50% share)',
        'Authorship in 3 articles',
        'Multi-study learning'
    ],
    metaPillList: [
        '6 Months',
        '3k/month',
        'Paid Projects'
    ]
}

export const phaseFourCard: PhaseCardInfo = {
    phaseNumber: '04',
    phaseCategory: 'Top Level',
    phaseTitle: 'Mainstream Work — Chief Researcher',
    firstColumnTitle: 'What you learn',
    firstColumnList: [
        'Systematic & meta-analysis',
        'Collaborative lit. search',
        '10 research articles',
        '2 meta-analyses',
        'Senior researcher supervision'
    ],
    secondColumnTitle: 'Rewards',
    secondColumnList: [
        'Article projects (50% share)',
        'First 3 authorship slots in 5 papers',
        'Share of membership revenue'
    ],
    thirdColumnInfo: 'Next: Meta Masters — coming soon.',
    metaPillList: [
        '1 Year',
        '4k/month',
        'Revenue Share'
    ],
    topLevel: true
}

export const researchServiceCards: ResearchServiceCardInfo[] = [
    {
        icon: '📋',
        title: 'Synopsis & Protocol Writing',
        subText: 'Full research proposals, synopsis drafting and protocol development with unlimited objection handling.'
    },
    {
        icon: '📊',
        title: 'Data Collection',
        subText: 'Structured field data collection for cross-sectional, case-control, cohort, and RCT studies.'
    },
    {
        icon: '🔢',
        title: 'Statistical Analysis',
        subText: 'SPSS, R Studio or Excel-based analysis with complete protocols and interpretation.'
    },
    {
        icon: '📝',
        title: 'Article Writing',
        subText: 'Publication-ready research manuscripts, literature reviews, and discussion sections.'
    },
    {
        icon: '📰',
        title: 'Journal Submission & Objections',
        subText: 'End-to-end journal submission support, national (20k) and international (40k) objection handling.'
    },
    {
        icon: '🧬',
        title: 'Full Research Package',
        subText: 'From topic formulation to published article — everything under one package for 1,50,000/6 months.'
    }
]

export const rewardsCards: InterRewardCardsInfo[] = [
    {
        id: 1,
        value: 10,
        type: 'Cross-Sectional'
    },
    {
        id: 2,
        value: 20,
        type: 'Case-Control'
    },
    {
        id: 3,
        value: 50,
        type: 'Cohort Studies'
    },
    {
        id: 4,
        value: 100,
        type: 'RCT Studies',
        hasRedBorder: true
    }
]
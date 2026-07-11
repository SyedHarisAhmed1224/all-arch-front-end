import { DataCollectionSectionCardProps } from '../researcher-portal/components/GigsDashboard/DataCollectionSection'

export const DataCollectionCardData: DataCollectionSectionCardProps[] = [
    {
        icon: '📋',
        title: 'Cross-Sectional Study — Hypertension Prevalence',
        subTitle: 'Collect data from 50 adults aged 40–70 using structured questionnaire. Hospital or community setting.',
        tags: [
            { type: 'category', text: 'Cross-Sectional' },
            { type: 'reward', text: 'Stipend: PKR 10/query' },
            { type: 'experience', text: '+25 XP' },
            { type: 'stage-one', text: 'Stage 1+' },
        ],
        reward: '💰 Up to PKR 500',
        experience: '⚡ +25 XP',
        locked: false
    },
    {
        icon: '🔬',
        title: 'Case-Control Study — Diabetes Risk Factors',
        subTitle: 'Collect matched case-control data from outpatient clinic. Minimum 30 cases + 30 controls required.',
        tags: [
            { type: 'category', text: 'Case-Control' },
            { type: 'reward', text: 'Stipend: PKR 20/query' },
            { type: 'experience', text: '+40 XP' },
            { type: 'stage-one', text: 'Stage 1+' },
        ],
        reward: '💰 Up to PKR 1,200',
        experience: '⚡ +40 XP',
        locked: false
    },
    {
        icon: '📊',
        title: 'Cohort Study — Maternal Health Outcomes',
        subTitle: 'Follow-up data collection over 6 months. Track maternal health indicators and birth outcomes.',
        tags: [
            { type: 'category', text: 'Cohort' },
            { type: 'reward', text: 'Stipend: PKR 50/query' },
            { type: 'experience', text: '+60 XP' },
            { type: 'stage-two', text: 'Stage 2+' },
        ],
        reward: '💰 Up to PKR 3,000',
        experience: '⚡ +60 XP',
        locked: true,
        required: 2
    },
    {
        icon: '🏥',
        title: 'RCT — Antibiotic Resistance Intervention',
        subTitle: 'Randomized controlled trial data collection. Strict protocol adherence required. Senior researchers only.',
        tags: [
            { type: 'category', text: 'RCT' },
            { type: 'reward', text: 'Stipend: PKR 100/query' },
            { type: 'experience', text: '+100 XP' },
            { type: 'stage-three', text: 'Stage 3+' },
        ],
        reward: '💰 Up to PKR 10,000',
        experience: '⚡ +100 XP',
        locked: true,
        required: 3
    }
]
export interface ResearchStagesCardProps {
    locked: boolean
    status: string
    icon: string
    title: string
    description: string
}

export interface ResearchStagesProps {
    sectionTitle: string
    title: string
    titleStatusDescription: string
    researchStagesCards: ResearchStagesCardProps[]
}

export const ResearchStagesData: ResearchStagesProps[] = [
    {
        sectionTitle: 'Stage 2 — Junior Researcher',
        title: 'Synopsis & Protocol Writing',
        titleStatusDescription: '🔒 Complete Stage 1 Exam',
        researchStagesCards: [
            { locked: true, status: '🔒', icon: '✍️', title: 'Topic Formulation', description: 'How to identify research gaps and form questions.' },
            { locked: true, status: '🔒', icon: '📐', title: 'Sample Size Calculation', description: 'Formulas, tools, and common mistakes.' },
            { locked: true, status: '🔒', icon: '📄', title: 'Synopsis Writing', description: 'Structure, components and ethics submission.' },
            { locked: true, status: '🔒', icon: '🔍', title: 'Literature Search', description: 'PubMed, Google Scholar and reference management.' },
            { locked: true, status: '🔒 Exam', icon: '📝', title: 'Stage 2 Exam', description: 'Unlocks after completing Stage 2 modules.' }
        ]
    },
    {
        sectionTitle: 'Stage 3 — Senior Researcher',
        title: 'Advanced Analysis & Article Writing',
        titleStatusDescription: '🔒 Complete Stage 2 Exam',
        researchStagesCards: [
            { locked: true, status: '🔒', icon: '📉', title: 'Advanced SPSS', description: 'Regression, correlation & multivariate analysis.' },
            { locked: true, status: '🔒', icon: '💻', title: 'R Studio Basics', description: 'Environment, packages, and data wrangling.' },
            { locked: true, status: '🔒', icon: '🖊️', title: 'Article Writing', description: 'IMRAD structure, journal selection & submission.' },
            { locked: true, status: '🔒', icon: '⚠️', title: 'Bias & Limitations', description: 'Types of bias and how to address them.' },
            { locked: true, status: '🔒 Exam', icon: '📝', title: 'Stage 3 Exam', description: 'Unlocks after completing Stage 3 modules.' }
        ]
    },
    {
        sectionTitle: 'Stage 4 — Chief Researcher',
        title: 'Systematic Reviews & Meta-Analysis',
        titleStatusDescription: '🔒 Complete Stage 3 Exam',
        researchStagesCards: [
            { locked: true, status: '🔒', icon: '🗂️', title: 'Systematic Review', description: 'PRISMA checklist, search strategy & screening.' },
            { locked: true, status: '🔒', icon: '🔬', title: 'Meta-Analysis', description: 'Forest plots, heterogeneity, and pooled estimates.' },
            { locked: true, status: '🔒', icon: '📊', title: 'Collaborative Research', description: 'Team coordination, data sharing & co-authorship.' },
            { locked: true, status: '🔒 Exam', icon: '📝', title: 'Stage 4 Exam', description: 'Unlocks after completing Stage 4 modules.' }
        ]
    },
    {
        sectionTitle: 'Stage 5 — Meta Masters',
        title: 'Elite Research Leadership',
        titleStatusDescription: '🔒 Complete Stage 4 Exam',
        researchStagesCards: [
            { locked: true, status: '🔒', icon: '🏆', title: 'Research Leadership', description: 'Managing teams, mentorship & institutional research.' },
            { locked: true, status: '🔒', icon: '🌍', title: 'International Publishing', description: 'High-impact journals, peer review and indexing.' },
            { locked: true, status: '🔒', icon: '💡', title: 'Grant Writing', description: 'Research proposals, funding bodies & budgeting.' },
            { locked: true, status: '🔒 Final', icon: '🎓', title: 'Meta Masters Final', description: 'The pinnacle of ALLARCH research training.' }
        ]
    }
];
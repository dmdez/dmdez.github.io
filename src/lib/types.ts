export interface JobData {
    content: string;
    filename: string;
    name: string;
    fields: {
        title: string;
        date: Date;
        skills: SkillsData[];
    }
}

export interface SkillsData {
    description: string;
    name: string;
    startDate: Date;
    endDate: Date;
}

export interface Profile {
    login: string;
    id: string;
    avatar_url: string;
    name: string;
}
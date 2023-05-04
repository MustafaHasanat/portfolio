export type SkillSet = {
    _id: string;
    title: string;
    order: number;
    skills: {
        name: string;
        logo: {
            asset: {
                url: string;
            };
        };
    }[];
};

export type Certificate = {
    _id: string;
    facility: string;
    degree: string;
    startDate: Date;
    endDate: Date;
    skills: string[];
    logo: {
        asset: {
            url: string;
        };
    };
};

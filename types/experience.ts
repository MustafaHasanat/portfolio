export type Experience = {
    _id: string;
    company: string;
    location: string;
    locationType: string;
    employmentType: string;
    role: string;
    startDate: Date;
    endDate: Date;
    order: number;
    bullets: string[];
    logo: {
        asset: {
            url: string;
        };
    };
};

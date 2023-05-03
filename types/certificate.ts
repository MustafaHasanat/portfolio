export type Certificate = {
    _id: string;
    facility: string;
    degree: string;
    date: string;
    skills: string[];
    logo: {
        asset: {
            url: string;
        };
    };
};

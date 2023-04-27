export type Course = {
    _id: string;
    title: string;
    category: string;
    issuer: string;
    date: Date;
    certificated: boolean;
    image: {
        asset: {
            url: string;
        };
    };
};

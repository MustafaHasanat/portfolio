export type Product = {
    _id: string;
    title: string;
    description: string;
    bullets: string[];
    order: number;
    tags: string[];
    landingPage: {
        asset: {
            url: string;
        };
    };
    cards: {
        name: string;
        projects: number;
        logo: {
            asset: {
                url: string;
            };
        };
    }[];
};

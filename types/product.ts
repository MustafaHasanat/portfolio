export type Product = {
    _id: string;
    title: string;
    description: string;
    order: number;
    tags: string[];
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

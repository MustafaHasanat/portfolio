import { Product } from "./product";

export type Project = {
    _id: string;
    title: string;
    description: string;
    launchedAt: string;
    alt: string;
    productType: Product;
    role: string;
    website: string;
    githubFrontend: string;
    githubBackend: string;
    tools: string[];
    landingPage: {
        asset: {
            url: string;
        };
    };
};

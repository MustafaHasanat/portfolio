import { Issuer } from "./issuer";

export type Course = {
    _id: string;
    title: string;
    category: string;
    issuer: Issuer;
    date: Date;
    certificated: boolean;
    image: {
        asset: {
            url: string;
        };
    };
};

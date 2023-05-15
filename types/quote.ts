import { Author } from "./author";

export type Quote = {
    _id: string;
    quote: string;
    author: Author;
};
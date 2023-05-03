export type Quote = {
    _id: string;
    quote: string;
    author: string;
    background: {
        asset: {
            url: string;
        };
    };
};
import { Quote } from "@/types/quote";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllQuotes(): Promise<Quote[]> {
    return await client.fetch(groq`*[_type == "quote"]{
        _id,
        quote,
        author,
        background {
            asset->{
                ...,
                url
            }
        }
    }`);
}

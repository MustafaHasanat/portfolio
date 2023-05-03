import { Language } from "@/types/language";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllLanguages(): Promise<Language[]> {
    return await client.fetch(groq`*[_type == "language"]{
        _id,
        name,
        proficiency,
        level,
        flag {
            asset->{
                ...,
                url
            }
        },
    }`);
}

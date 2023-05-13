import { Doc } from "@/types/doc";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllDocs(): Promise<Doc[]> {
    return await client.fetch(groq`*[_type == "doc"]{
        _id,
        title,
        link,
        category,
        icon {
            asset->{
                url
            }
        }
    }`);
}

import { Background } from "@/types/background";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllBackgrounds(): Promise<Background[]> {
    return await client.fetch(groq`*[_type == "background"]{
        _id,
        usage,
        alt,
        src {
            asset->{
                url
            }
        }
    }`);
}

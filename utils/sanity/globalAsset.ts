import { GlobalAsset } from "@/types/globalAsset";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllGlobalAssets(): Promise<GlobalAsset[]> {
    return await client.fetch(groq`*[_type == "globalAsset"]{
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

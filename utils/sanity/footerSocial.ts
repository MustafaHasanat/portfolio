import { client } from "./client";
import { groq } from "next-sanity";
import { FooterSocial } from "@/types/footerSocial";

export async function getAllFooterSocials(): Promise<FooterSocial[]> {
    return await client.fetch(groq`*[_type == "footerSocials"]{  // real name is mistaken by "footerSocials"
        _id,
        title,
        text,
        bgColor,
        link,
        transform,
        image {
            asset->{
                url
            }
        }
    }`);
}

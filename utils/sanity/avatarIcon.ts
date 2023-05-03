import { AvatarIcon } from "@/types/avatarIcon";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllAvatarIcons(): Promise<AvatarIcon[]> {
    return await client.fetch(groq`*[_type == "avatarIcon"]{
        _id,
        title,
        color,
        position {
            rotateZ,
            rotateY,
            delay
        },
        logo {
            asset->{
                ...,
                url
            }
        }
    }`);
}

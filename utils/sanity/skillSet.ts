import { client } from "./client";
import { groq } from "next-sanity";
import { SkillSet } from "@/types/skillSet";

export async function getAllSkillSets(): Promise<SkillSet[]> {
    return await client.fetch(groq`*[_type == "skillSet"]{
        _id,
        title,
        order,
        skills {
            name,
            logo {
                asset->{
                    url
                }
            }
        }[],
    }`);
}

import { Experience } from "@/types/experience";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllExperiences(): Promise<Experience[]> {
    return await client.fetch(groq`*[_type == "experience"]{
        _id,
        company,
        location,
        locationType,
        employmentType,
        role,
        startDate,
        endDate,
        order,
        bullets,
        logo {
            asset->{
                url
            }
        }
    }`);
}

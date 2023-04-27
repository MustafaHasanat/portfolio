import { Course } from "@/types/course";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllCourses(): Promise<Course[]> {
    return await client.fetch(groq`*[_type == "course"]{
        _id,
        title,
        category,
        issuer,
        date,
        certificated,
        image {
            asset->{
                ...,
                url
            }
        }
    }`);
}

import { Project } from "@/types/project";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllProjects(): Promise<Project[]> {
    return await client.fetch(groq`*[_type == "project"]{
        _id,
        title,
        description,
        launchedAt,
        productType->{
            title,
        },
        role,
        website,
        githubFrontend,
        githubBackend,
        tools,
        alt,
        landingPage {
            asset->{
                url
            }
        }
    }`);
}

export async function getProjectByAlt(alt: string): Promise<Project> {
    const project =
        await client.fetch(groq`*[_type == "project" && alt == "${alt}"]{
        _id,
        title,
        description,
        launchedAt,
        productType->{
            title,
        },
        role,
        website,
        githubFrontend,
        githubBackend,
        tools,
        alt,
        landingPage {
            asset->{
                url
            }
        }
    }`);

    return project[0];
}

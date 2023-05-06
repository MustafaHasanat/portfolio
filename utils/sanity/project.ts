import { Project } from "@/types/project";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllProjects(): Promise<Project[]> {
    return await client.fetch(groq`*[_type == "project"]{
        _id,
        title,
        description,
        launchedAt,
        type,
        role,
        website,
        githubFrontend,
        githubBackend,
        tools,
        landingPage {
            asset->{
                url
            }
        }
    }`);
}

export async function getProjectById(id: string): Promise<Project> {
    const project =
        await client.fetch(groq`*[_type == "project" && _id == "${id}"]{
        _id,
        title,
        description,
        launchedAt,
        type,
        role,
        website,
        githubFrontend,
        githubBackend,
        tools,
        landingPage {
            asset->{
                url
            }
        }
    }`);

    return project[0];
}

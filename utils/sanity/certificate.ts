import { Certificate } from "@/types/certificate";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllCertificates(): Promise<Certificate[]> {
    return await client.fetch(groq`*[_type == "certificate"]{
        _id,
        facility,
        degree,
        date,
        skills,
        logo {
            asset->{
                ...,
                url
            }
        }
    }`);
}

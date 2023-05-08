import { Product } from "@/types/product";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllProducts(): Promise<Product[]> {
    return await client.fetch(groq`*[_type == "product"]{
        _id,
        title,
        description,
        tags,
        order,
        cards {
            name,
            projects,
            logo {
                asset->{
                    url
                }
            }
        }[],
    }`);
}

export async function getProductById(id: string): Promise<Product> {
    const product =
        await client.fetch(groq`*[_type == "product" && _id == "${id}"]{
        _id,
        title,
        description,
        tags,
        order,
        cards {
            name,
            projects,
            logo {
                asset->{
                    url
                }
            }
        }[],
    }`);

    return product[0];
}

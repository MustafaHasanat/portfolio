import { Product } from "@/types/product";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllProducts(): Promise<Product[]> {
    return await client.fetch(groq`*[_type == "product"]{
        _id,
        title,
        description,
        isActive,
        bullets,
        tags,
        order,
        landingPage {
            asset->{
                url
            }
        },
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

export async function getProductByTitle(title: string): Promise<Product> {
    const product =
        await client.fetch(groq`*[_type == "product" && title == "${title}"]{
        _id,
        title,
        description,
        isActive,
        bullets,
        tags,
        order,
        landingPage {
            asset->{
                url
            }
        },
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

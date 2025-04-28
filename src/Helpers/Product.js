import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { CRUDModel } from "./CRUDModel.js";

class Product extends CRUDModel {
    constructor() {
        super(prisma.product)
    }

    async CreateProduct(name,categoryId) {
        var newProduct = await prisma.product.create({
            data: {
                Name: name,
                Description: "",
                id_Category: categoryId,
                categories: {
                    connect: {
                        id: categoryId,
                    }
                }
            }
        });

        return newProduct.Name;
    }
}

export const ProductService = new Product();
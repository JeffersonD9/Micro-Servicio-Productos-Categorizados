import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { CRUDModel } from "./CRUDModel.js";

class Category extends CRUDModel {
    constructor() {
        super(prisma.category)
    }

    async UncategorizedProducts(id_category) {
        try {

            await prisma.product.updateMany({
                where: { id_Category: id_category },
                data: { id_Category: 0 }
            });
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}

export const CategoryService = new Category();

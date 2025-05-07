import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { CRUDModel } from "./CRUDModel.js";

class Category extends CRUDModel{
    constructor(){
        super(prisma.category)
    }
    
async function UncategorizedProducts(id_category) {
    const result = await prisma.product.updateMany({
        where: { id_Category: id_category },
        data: { id_Category: 0 }
    });
    return result;
}
}

export const CategoryService = new Category();

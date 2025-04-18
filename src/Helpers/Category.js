import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { CRUDModel } from "./CRUDModel.js";

class Category extends CRUDModel{
    constructor(){
        super(prisma.category)
    }
}

export const CategoryService = new Category();
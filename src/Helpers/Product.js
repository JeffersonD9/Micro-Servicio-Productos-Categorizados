import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { CRUDModel } from "./CRUDModel.js";

class Product extends CRUDModel{
    constructor(){
        super(prisma.product)
    }
}

export const ProductService = new Product();
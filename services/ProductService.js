import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { CRUDService } from "./CrudService";

class ProductService extends CRUDService{
    constructor(){
        super(prisma.product)
    }
}

export const ProductService = new ProductService();
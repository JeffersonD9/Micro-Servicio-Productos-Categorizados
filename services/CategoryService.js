import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { CRUDService } from "./CrudService";

class CategoryService extends CRUDService{
    constructor(){
        super(prisma.category)
    }
}

export const CategoryService = new CategoryService();
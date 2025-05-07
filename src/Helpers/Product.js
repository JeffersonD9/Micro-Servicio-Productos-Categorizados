import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { CRUDModel } from "./CRUDModel.js";

class Product extends CRUDModel {
    constructor() {
        super(prisma.product)
    }

   async CreateProduct(name, categoryId, description = "") {
  const newProduct = await prisma.product.create({
    data: {
      Name: name,
      Description: description,
      id_Category: categoryId
    }
  });
  return newProduct.Name;
}

}

export const ProductService = new Product();

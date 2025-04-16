import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function CreateCategory(data){

    const newCategory = await prisma.category.create({
      data : data
    })

    return newCategory;
}

export async function GetCategories() {
  
    const allCategories = await prisma.category.findMany();
    return allCategories;
}

export async function SearchCategory(categoryId) {

  const searchCategory = await prisma.category.findUnique({
    where: {
      id : categoryId
    },
  });

  return buscarCategoria
}

export async function UpdateCategory(data, categoryId) {

  const { Nombre} = data;
  
  const UpdateCategory = await prisma.category.update({
    where:{id:categoryId},
    data: {
      Nombre,
          }
      })
  return UpdateCategory
}

export async function DeleteCategory(categoryId){

  const categoryToDelete = await prisma.category.delete({ where:{id:categoryId}})

  return categoryToDelete
}
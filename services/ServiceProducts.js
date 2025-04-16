import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function SearchByIdItem(id_categoria,nombre,id_usuario){

 const productfound = prisma.productos.findMany({
    where: {
      Nombre:nombre,
      id_Categoria:id_categoria,
      id_Usuario:id_usuario
    },
})
return productfound
}

export async function SearchsItems(){
  const getProducts = await prisma.productos.findMany()
  return getProducts
}

export async function SearchProduct() {

    const productsFound = await prisma.productos.findMany({
        include: {
          usuarios: {
            select: {
              Nombres: true
            }
          },
          categorias: {
            select: {
              Nombre: true
            }
          }
        }
      });

      return productsFound
  }
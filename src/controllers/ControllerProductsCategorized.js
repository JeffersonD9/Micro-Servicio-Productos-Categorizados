import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener productos por categoría
export const GetProductsByCategory = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.id_categoria, 10);
    
    const products = await prisma.product.findMany({
      where: {
        categoryId: parseInt(categoryId)
      },
      include: {
        category: true // Incluye los datos de la categoría a la que pertenece cada producto
      }
    });
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener productos por categoría',
      error: error.message
    });
  }
};

// Obtener todos los productos organizados por categoría
export const GetAllCategorizedProducts = async (req, res) => {
  try {
    // Obtenemos todas las categorías con sus productos relacionados
    const categories = await prisma.category.findMany({
      include: {
        products: true // Incluye todos los productos que pertenecen a cada categoría
      }
    });
    
    // Formateamos la respuesta para que sea más fácil de consumir por el frontend
    const categorizedProducts = categories.map(category => ({
      categoryId: category.Id,
      categoryName: category.Name,
      categoryDescription: category.description,
      productsCount: category.products.length,
      products: category.products.map(product => ({
        id: product.Id,
        name: product.Name,        
      }))
    }));
    
    res.status(200).json({
      success: true,
      categoriesCount: categories.length,
      data: categorizedProducts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener productos categorizados',
      error: error.message
    });
  }
};
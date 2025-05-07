import { ProductService } from "../Helpers/Product.js";

let service = ProductService;

export async function CreateProduct(req, res) {
  const { Name } = req.body;
  let { CategoryId, Description = "" } = req.body;
  
  try {
    const existingProduct = await service.any({
      Name: Name,
    });
    
    if (CategoryId === undefined || CategoryId === null) {
      return res.status(409).json({ message: "Debe Categorizar el producto" });
    }
    
    if (existingProduct) {
      return res.status(409).json({ message: "Este producto ya existe" });
    }
        
    var nameProduct = await service.CreateProduct(Name, CategoryId, Description);
    
    res.status(200).json({
      message: "Se creó con éxito el producto", 
      nameProduct
    });
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ message: error.message });
  }
}

export async function GetProductById(req, res) {
  const id_product = parseInt(req.params.id_product, 10);
  
  if (isNaN(id_product)) {
    return res.status(400).json({ 
      success: false,
      message: "ID de producto inválido" 
    });
  }
  
  try {
    const product = await service.first({ Id: id_product });
    
    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: "Producto no encontrado" 
      });
    }
    
    res.status(200).json({ 
      success: true,
      message: "Producto encontrado", 
      data: product 
    });
  } catch (error) {
    console.error("Error al obtener producto por ID:", error);
    res.status(500).json({ 
      success: false,
      message: "Error al obtener el producto",
      error: error.message
    });
  }
}

export async function GetAllProducts(req, res) {
  try {
    // Para filtros
    // const filters = {}; 
    // if (req.query.categoryId) filters.id_Category = parseInt(req.query.categoryId, 10);
    
    const products = await service.getAll();
    
    res.status(200).json({
      success: true,
      message: "Productos obtenidos exitosamente",
      data: products,
      count: products.length
    });
  } catch (error) {
    console.error("Error al obtener todos los productos:", error);
    res.status(500).json({
      success: false,
      message: "Ocurrió un error al obtener los productos",
      error: error.message
    });
  }
}

export async function DeleteProduct(req, res) {
  const id_product = parseInt(req.params.id_product, 10);
  
  if (isNaN(id_product)) {
    return res.status(400).json({ 
      success: false,
      message: "ID de producto inválido" 
    });
  }
  
  try {
    
    const existingProduct = await service.first({ Id: id_product });
    
    if (!existingProduct) {
      return res.status(404).json({ 
        success: false,
        message: "Producto no encontrado" 
      });
    }
    
    const deleted = await service.delete({ Id: id_product });
    
    res.status(200).json({
      success: true,
      message: "Producto eliminado exitosamente",
      data: deleted
    });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ 
      success: false,
      message: "Error al eliminar el producto",
      error: error.message
    });
  }
}

export async function UpdateProduct(req, res) {
  try {
    const id_product = parseInt(req.params.id_product, 10);
    const { Name, CategoryId, Description } = req.body;
    
    if (isNaN(id_product)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }
    
    // Preparar los datos de actualización
    const updateData = {};
    if (Name !== undefined) updateData.Name = Name;
    if (Description !== undefined) updateData.Description = Description;
    if (CategoryId !== undefined) updateData.id_Category = CategoryId;
    
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields to update",
      });
    }
    
    // Llamar al método update con la estructura correcta
    const updated = await service.update(
      { Id: id_product }, // where
      updateData          // data
    );
    
    res.status(200).json({
      success: true,
      message: "Producto actualizado con éxito",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the product",
      error: error.message
    });
  }
}


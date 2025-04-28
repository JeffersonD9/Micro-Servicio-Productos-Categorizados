import { ProductService } from "../Helpers/Product.js";

let service = ProductService;

export async function CreateProduct(req, res) {

  const { Name } = req.body;
  let { categoryId } = req.body;

  try {

    const existingProduct = await service.any({
      Name: Name,
    });

    if (categoryId === undefined || categoryId === null) {
      categoryId = 0;
    }

    if (existingProduct) {
      return res.status(409).json({ message: "Este producto ya existe" });
    }

    var nameProduct = await service.CreateProduct(Name, categoryId);

    res.status(200).json({
      message: "Se creó con éxito el producto",nameProduct
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function GetProductById(req, res) {
  const id_product = parseInt(req.params.id_producto, 10);

  try {
    const product = await service.first({ where: { Id: id_product } });

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json({ message: "Producto encontrado", data: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function GetAllProducts(req, res) {
  try {

    const products = await service.getAll();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "An error occurred while fetching Products"
    });
  }
}

export async function DeleteProduct(req, res) {
  const id_product = parseInt(req.params.id_producto, 10);

  try {
    const deleted = await service.delete({ where: { Id: id_product } });

    res.status(200).json({
      message: "Producto eliminado",
      data: deleted,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function UpdateProduct(req, res) {
  try {
    const id_product = parseInt(req.params.id_producto, 10);
    const { Name, CategoryId } = req.body;

    if (isNaN(id_product)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const updateData = {};
    if (Name !== undefined) updateData.Name = Name;
    if (CategoryId !== undefined) updateData.id_Category = CategoryId;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields to update",
      });
    }

    const updated = await service.update({
      where: { Id: id_product },
      data: updateData,
    });

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
    });
  }
}


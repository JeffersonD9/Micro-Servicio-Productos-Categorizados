import { ProductService } from "../Helpers/Product.js";

let service = ProductService;

export async function CreateProduct(req, res) {
  const { productName, productId, price, categoryId } = req.body;

  try {
    const existingProduct = await service.any({
      Name: productName,
      Id: productId,
    });

    if (existingProduct) {
      return res.status(409).json({ message: "Este producto ya existe" });
    }

    await service.create({
      Name: productName,
      Price: price,
      CategoryId: categoryId,
    });

    res.status(200).json({
      message: "Se creó con éxito el producto",
      product: productName,
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
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  const id_product = parseInt(req.params.id_producto, 10);
  const { Name, Price, CategoryId } = req.body;

  try {
    const updated = await service.update({
      where: { Id: id_product },
      data: { Name, Price, CategoryId },
    });

    res.status(200).json({
      message: "Producto actualizado con éxito",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

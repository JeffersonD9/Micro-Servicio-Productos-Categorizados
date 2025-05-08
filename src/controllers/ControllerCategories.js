import { CategoryService } from "../Helpers/Category.js";

let service = CategoryService;

export async function CreateCategory(req, res) {
    const { Name } = req.body;
    
    try {
      // Check if category already exists
      const filterCategory = await prisma.category.findFirst({
        where: { Name }
      });
      
      if (filterCategory) {
        return res.status(409).json({ message: "Esta categoría ya existe" });
      }
      
      // Crear categoría - usando prisma directamente para evitar problemas del servicio
      const newCategory = await prisma.category.create({
        data: {
          Name
        }
      });
      
      res.status(200).json({ 
        message: "Se creó con éxito la categoría", 
        category: newCategory 
      });
    } catch (error) {
      console.log("Error detallado:", error);
      res.status(500).json({ 
        message: "Error al crear la categoría", 
        error: error.message 
      });
    }
  }


export async function GetCategoryById(req, res) {

    const id_category = parseInt(req.params.id_category, 10);

    try {

        const category = await service.first({ Id: id_category });
        res.status(200).json({ message: "Category", data: category })

    } catch (error) {
        res.status(500).json({ message: error });
        console.log(error);
    }
}

export async function GetAllCategories(req, res) {
    try {

        const categories = await service.getAll();

        res.status(200).json({
            success: true,
            message: "Categories fetched successfully",
            data: categories
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching categories"
        });
    }
}

export async function DeleteCategory(req, res) {

    const id_category = parseInt(req.params.id_category, 10);

    try {
        const existingCategory = await service.first({
            where: { Id: id_category }
        });

        if (!existingCategory) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        const resultUncategorizedProducts = await service.UncategorizedProducts(id_category);
        
        if(!resultUncategorizedProducts)
            return res.status(404).json({ message: "Error al descategorizar productos" });

        await service.delete({ Id: id_category })

        res.status(200).json({ message: "Categoría eliminada y productos actualizados" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la categoría", error });
    }
}

export async function UpdateCategory(req, res) {

    const id_categoria = parseInt(req.params.id_category, 10);
    const { Name } = req.body;
    console.log(Name)
    try {
        if (isNaN(id_categoria)) {
            return res.status(400).json({
                success: false,
                message: "Invalid category ID"
            });
        }

        if (!Name) {
            return res.status(400).json({
                success: false,
                message: "Category name is required"
            });
        }

        const updatedCategory = await service.update({ Id: id_categoria }, { Name });

        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: updatedCategory
        });
    } catch (error) {

        res.status(500).json({
            success: false,
            message: "An error occurred while updating the category"
        });
    }
}

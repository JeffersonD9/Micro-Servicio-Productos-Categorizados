import { CategoryService } from "../Helpers/Category.js";

let service = CategoryService;

export async function CreateCategory(req, res) {

    const { Name } = req.body;
    console.log(categoryName)

    try {

        const filterCategory = await service.any({ Name: Name })

        if (filterCategory) {
            return res.status(409).json({ message: "Esta categoría ya existe" })
        }

        await service.create(Name);

        res.status(200).json({ message: "Se creo con éxito la categoría: ", Name })

    } catch (error) {
        res.status(500).json({ message: error })
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

        const categoryToDelete = service.delete({
            Id: id_category
        });

        res.status(200).json({ message: "Categoria Borrada", data: categoryToDelete })

    } catch (error) {
        res.status(500).json({ message: error });
        console.log(error);
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

        const updatedCategory = await service.update({ id: id_categoria }, { Name });

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

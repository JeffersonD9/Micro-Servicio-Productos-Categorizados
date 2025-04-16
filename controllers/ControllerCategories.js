import { CategoryService } from "../services/CategoryService";

let service = CategoryService;

export async function CreateCategory(req,res){
     const {categoryName,categoryId} = req.body;
     console.log(categoryName)

    try {

        const filterCategory = await service.any({Name : categoryName, Id :categoryId })

        if(filterCategory){
            return res.status(409).json({message : "Esta categoría ya existe"})
        }

       await service.create(categoryName);

        res.status(200).json({message : "Se creo con éxito la categoría: ", categoryName})

    } catch (error) {
        res.status(500).json({message : error})
    }
}
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

export async function GetCategoryById(req,res) {
    
    const id_category = parseInt(req.params.id_Categoria, 10);

    try {
        
        const category = await service.first({where:{Id: id_category}});
        res.status(200).json({message : "Category", data : category})

    } catch (error) {
        res.status(500).json({ message: error });
        console.log(error); 
    }
}

export async function GetAllCategories(){
    

    try {
        
        const categories = await service.getAll();
        console.log(categories)
        res.status(200)

    } catch (error) {
        res.status(500).json({ message: error });
        console.log(error);
    }
}

export async function DeleteCategory(req,res){

    const id_category = parseInt(req.params.id_categoria, 10);

    try {
    
        const categoryToDelete = service.delete({where:{
            Id: id_category
        }});

        res.status(200).json({message: "Categoria Borrada", data : categoryToDelete})

    } catch (error) {
        res.status(500).json({ message: error });
      console.log(error);
    }
    
}

export async function UpdateCategory(params) {

    const id_categoria = parseInt(req.params.id_categoria, 10);
    const { Nombre} = data;

    try {
        
    } catch (error) {
        
    }
}
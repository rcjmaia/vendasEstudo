import { getCategoryId } from "../../services/category-service";

export async function loadCategory({params} : any){
    const categoryId = +params.categoryId;
    const resp = await getCategoryId(categoryId)

    // throw new Response ("errrooooooo", {status: 404})
    
    return resp;
}
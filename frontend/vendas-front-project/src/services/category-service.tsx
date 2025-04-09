import api from "./api"

interface Category {
    id: number;
    name: string;
}
  
interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}



export const fetchCategories = async () => {
    const resp = await api.get<ApiResponse<Category[]>>('/Category/Get')
    return resp.data;
}

export const getCategoryId = async (id : number) => {
    const resp = await api.get<ApiResponse<Category>>(`/Category/${id}`)

    return resp.data
}

export const insertCategory = async (category : Category) => {
    const resp = await api.post<ApiResponse<Category[]>>('/Category/InsertCategory', category)
    return resp.data
}

export const deleteCategory = async (category : Category) => {
    const resp = await api.delete<ApiResponse<Category[]>>(`/Category/Delete/${category.id}`)
    return resp.data
}

export const updateCategory = async (category : Category) => {
    const resp = await api.put<ApiResponse<Category[]>>('/Category/UpdateCategory', category)
    return resp.data
}
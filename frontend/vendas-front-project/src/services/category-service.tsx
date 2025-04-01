import api from "./api"

interface Category {
    id: number;
    name: string;
}
  
  interface ApiResponse {
    data: Category[];
    message: string;
    success: boolean;
}

export const fetchCategories = async () => {
    const resp = await api.get<ApiResponse>('/Category/Get')
    return resp.data;
}

export const createCategory = async (category : Category) => {
    const resp = await api.post<ApiResponse>('/Category/CreateCategory', category)
    return resp.data
}

export const deleteCategory = async (category : Category) => {
    const resp = await api.delete(`/Category/Delete/${category.id}`)
    return resp.data
}

export const updateCategory = async (category : Category) => {
    const resp = await api.put('/Category/UpdateCategory', category)
    return resp.data
}
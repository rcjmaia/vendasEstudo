import { useParams } from "react-router-dom";
import { getCategoryId } from "../../services/category-service";
import { useEffect, useState } from "react";

export default function CategoryCadNormalRouterId() {

    interface Caterogy {
        id: number;
        name: string;
    }

    const { categoryId } = useParams()
    const [category, setCategory] = useState<Caterogy | null>(null)

    useEffect(() => {
        const GetCategoryId = async () => {

            if (categoryId) {
                const { data, message, success } = await getCategoryId(+categoryId)
                if (success) {
                    setCategory(data)
                }
            }
        }
        GetCategoryId();
    }, []);

    return (
        <>
            <div style={{ display: "flex", gap: "2rem", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "red", minHeight: "20vh", width: "fit-content", margin: "auto", borderRadius: "12px", padding: "5px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <label style={{ width: "80px", textAlign: "left" }}>Id:</label>
                    <input value={category?.id ?? ""} readOnly />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <label style={{ width: "80px", textAlign: "left" }}>Categoria:</label>
                    <input value={category?.name ?? ""} readOnly />
                </div>
            </div>
        </>
    )
}
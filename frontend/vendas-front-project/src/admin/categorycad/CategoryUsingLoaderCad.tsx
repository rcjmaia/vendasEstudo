import { useLoaderData } from "react-router-dom";

export default function CategoryUsingLoaderCad() {    
    const { data, message, success } = useLoaderData()
        
    return (
        <>
            {console.log(`testeeeee${data?.id}`)}
            <div style={{ display: "flex", gap: "2rem", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "red", minHeight: "20vh", width: "fit-content", margin: "auto", borderRadius: "12px", padding: "5px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <label style={{ width: "80px", textAlign: "left" }}>Id:</label>
                    <input value={data?.id ?? ""} readOnly />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <label style={{ width: "80px", textAlign: "left" }}>Categoria:</label>
                    <input value={data?.name ?? ""} readOnly />
                </div>
            </div>
        </>
    )
}
import { useContext } from "react";
import UserContext from "./UserContext";

export default function UserInfo(){
    const user = useContext(UserContext)

    if (!user){
        return 
    }
    return (
        <>
            <p>Nome: {user.nome}</p>
            <p>Idade: {user.idade}</p>
        </>
    )
}
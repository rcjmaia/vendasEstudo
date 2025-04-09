import { ReactNode, useContext } from "react";
import UserContext from "./UserContext";

type HeaderProps = {
    children : ReactNode
}

export default function Header({children}:HeaderProps){
    const user = useContext(UserContext)
    if (!user){
        return            
    }

    return(
        <div>
            <p>Contexto Header</p>
            <p>Nome: {user.nome}</p>
            {children}
        </div>
    )
}
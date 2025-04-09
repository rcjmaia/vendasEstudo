import Header from "./Header"
import UserContext from "./UserContext"
import UserInfo from "./UserInfo"

export default function Context() {
    const user = {
        nome: "joao",
        idade: 20
    }

    return (
        <>
            <UserContext.Provider value={user}>
                <UserInfo />
                <Header>
                    <p>pagina context passando children para header</p>
                </Header>
            </UserContext.Provider>

            <p>pagina context</p>
            <p>fora do contexto</p>
        </>
    )
}
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorDefault(){
    const error = useRouteError()

    if (isRouteErrorResponse(error)){
        switch (error.status) {
            case 404: 
                return <h2>Ops... registro nao encontrada</h2>
            case 401:
                return <h2>sem autorizacao</h2>
            case 400:
                return <h2>ocorreu um erro na requisicao</h2>
            case 500:
                return <h2>erro interno no servidor</h2>
        }
    }

    return <h2> algo deu errado</h2>
}
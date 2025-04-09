import { RouterProvider } from "react-router-dom";
import CategoryCadModal from "./admin/categorycad/CategoryCadModal";
import CategoryList from "./admin/categorycad/CategoryList";
import Layout from "./aulaCss/gridTemplateColumns/exemploGridTemplateAreas/Layout";
import Context from "./cursoReact/Context/Context";
import Exemplo1 from "./cursoReact/Exemplo1/exemplo1";
import ExemploChildren from "./cursoReact/ExemploChildren/ExemploChildren";
import PropsRestParams from "./cursoReact/PropsRestParams/PropsRestParams";
import UseRef from "./cursoReact/UseRef/UseRef";
import router from "./router";


function App(){
    return(
        <div className="App">
            <RouterProvider router={router} />            
        </div>
    )
}

export default App;
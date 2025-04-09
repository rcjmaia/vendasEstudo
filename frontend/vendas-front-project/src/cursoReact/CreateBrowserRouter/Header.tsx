import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section>
            <header>
                <nav style={{display:"flex", gap:"2rem"}}>
                    <Link to="/">Home</Link>
                    <Link to="/Context">Context</Link>
                    <Link to="/ExemploChildren">ExemploChildren</Link>
                    <Link to="/CategoryList">CategoryList</Link>
                    <Link to="/CategoryCadNormalRouterId/7">CategoryCadNormalRouterId</Link>
                    <Link to="/CategoryUsingLoaderCad/7">CategoryUsingLoaderCad</Link>
                    
                </nav>
            </header>
            <h2>pagina inicial</h2>
            <p>Seja bem vindo a nossa loja</p>
        </section>
    )
}
import { createBrowserRouter } from "react-router-dom";
import CategoryList from "./admin/categorycad/CategoryList";
import Context from "./cursoReact/Context/Context";
import ExemploChildren from "./cursoReact/ExemploChildren/ExemploChildren";
import RootLayout from "./cursoReact/CreateBrowserRouter/RootLayout";
import CategoryCadNormalRouterId from "./admin/categorycad/CategoryCadNormalRouterId";
import CategoryUsingLoaderCad from "./admin/categorycad/CategoryUsingLoaderCad";
import { loadCategory } from "./admin/categorycad/CategoryUsingLoader";
import ErrorDefault from "./Error/ErrorDefault";

// npm install react-router-dom

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/Context",
                element: <Context />
            },
            {
                path: "/CategoryList",
                element: <CategoryList />
            },
            {
                path: "/CategoryCadNormalRouterId/:categoryId",
                element: <CategoryCadNormalRouterId />
            },
            {
                path: "/CategoryUsingLoaderCad/:categoryId",
                element: <CategoryUsingLoaderCad />,
                loader: loadCategory,
                errorElement: <ErrorDefault />
            }
        ]
    },
    {
        path: "/ExemploChildren",
        element: <ExemploChildren />
    }
])

export default router
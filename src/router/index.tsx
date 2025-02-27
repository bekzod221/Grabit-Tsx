import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../pages/layout/Layout"
import Detail from "../pages/Detail"
import Carts from "../pages/Carts"

const Routers = () => {
  return (
    <>
        {
            useRoutes([
                {
                    path: "/",
                    element: <Layout/>,
                    children: [
                        {
                            path: "/",
                            element: <Home/>
                        },
                        {
                            path: "product/:id",
                            element: <Detail/>
                        },
                        {
                            path: "carts",
                            element: <Carts/>
                        },
                        {
                            path: "*",
                            element: <p>404 ERROR</p>
                        }
                    ]
                }
            ])
        }
    </>
  )
}

export default Routers
import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../pages/layout/Layout"

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
                        }
                    ]
                }
            ])
        }
    </>
  )
}

export default Routers
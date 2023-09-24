import Navs from "./Navs"
import { Outlet } from "react-router-dom"
const MainLayout = () => {
    return (
        <>
            <Navs />
            <Outlet />
        </>
    )
}

export default MainLayout
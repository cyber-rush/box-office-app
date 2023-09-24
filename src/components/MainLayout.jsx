import Navs from "./Navs"
import { Outlet } from "react-router-dom"
const MainLayout = () => {
    return (
        <>  <h1>Box Office</h1>
            <Outlet />
            <Navs />
        </>
    )
}

export default MainLayout
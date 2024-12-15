import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav/Nav"

const HomeLayout = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}

export default HomeLayout
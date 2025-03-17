import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../Components/Home/Home.jsx"
import { NavBar } from "../Components/NavBar/NavBar.jsx"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                <NavBar/>
                <Outlet/>
                </>
            }>
            <Route index element={<Home/>}/>
            </Route>
        </Routes>
    )
}
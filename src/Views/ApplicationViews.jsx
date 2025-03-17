import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../Components/Home/Home.jsx"
import { NavBar } from "../Components/NavBar/NavBar.jsx"
import { AllPosts } from "../Components/Posts/AllPosts.jsx"

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
            <Route path="/posts" element={<AllPosts/>}/>
            </Route>
        </Routes>
    )
}
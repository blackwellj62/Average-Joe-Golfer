import { Route, Routes } from "react-router-dom"
import { Home } from "../Components/Home/Home.jsx"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}
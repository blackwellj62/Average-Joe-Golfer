import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../Components/Home/Home.jsx"
import { NavBar } from "../Components/NavBar/NavBar.jsx"
import { AllPosts } from "../Components/Posts/AllPosts.jsx"
import { PostDetails } from "../Components/Posts/PostDetails.jsx"
import { useEffect, useState } from "react"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        const localJoeUser = localStorage.getItem("average-joe_user")
  const joeUserObject = JSON.parse(localJoeUser)
  setCurrentUser(joeUserObject)
    },[])

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
            <Route path="/:postId" element={<PostDetails currentUser={currentUser}/>}/>
            </Route>
        </Routes>
    )
}
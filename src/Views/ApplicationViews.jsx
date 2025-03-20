import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../Components/Home/Home.jsx"
import { NavBar } from "../Components/NavBar/NavBar.jsx"
import { AllPosts } from "../Components/Posts/AllPosts.jsx"
import { PostDetails } from "../Components/Posts/PostDetails.jsx"
import { useEffect, useState } from "react"
import { NewPost } from "../Components/Forms/NewPost.jsx"
import { MyPosts } from "../Components/Posts/MyPosts.jsx"
import { EditPost } from "../Components/Forms/EditPost.jsx"
import { Profile } from "../Components/Profile/Profile.jsx"
import { AuthorProfile } from "../Components/Profile/AuthorProfile.jsx"
import { EditProfile } from "../Components/Forms/EditProfile.jsx"

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
            <Route index element={<Home currentUser={currentUser}/>}/>
            <Route path="/posts" element={<AllPosts currentUser={currentUser}/>}/>
            <Route path="/:postId" element={<PostDetails currentUser={currentUser}/>}/>
            <Route path="/new-post" element={<NewPost currentUser={currentUser}/>}/>
            <Route path="/my-posts" element={<MyPosts currentUser={currentUser}/>}/>
            <Route path="/edit/:postId" element={<EditPost currentUser={currentUser}/>}/>
            <Route path="/profile/" element={<Profile currentUser={currentUser}/>}/>
            <Route path="/profile/:userId" element={<AuthorProfile currentUser={currentUser}/>}/>
            <Route path="/edit-profile" element={<EditProfile currentUser={currentUser}/>}/>
            </Route>
        </Routes>
    )
}
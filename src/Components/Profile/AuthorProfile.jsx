import { useEffect, useState } from "react"
import "./Profile.css"
import { useParams } from "react-router-dom"
import { getUserById } from "../../Services/Users.jsx"

export const AuthorProfile = () => {
    const [userById,setUserById] = useState({})
    const {userId} = useParams()

    useEffect(()=>{
        getUserById(userId).then(data =>{
            const userObj = data
            setUserById(userObj)
        })
    },[userId])

    return ( 
    <div className="card">
        <div className="card-body">
        <h2 className="card-title">{userById.name}</h2>
        <h6 className="card-subtitle mb-2 text-body-secondary">{userById.email}</h6>
        <p className="card-text">
            {userById.experience}
            {userById.experience === 1 ? ' year' : ' years'} of golf experience
        </p>
        </div>
    </div>
    );
}
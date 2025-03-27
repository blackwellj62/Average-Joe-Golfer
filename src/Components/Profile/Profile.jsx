import { useEffect, useState } from "react"
import "./Profile.css"
import { getAllUsers } from "../../Services/Users.jsx"
import { useNavigate } from "react-router-dom"

export const Profile = ({currentUser}) => {
    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useState({})
    const navigate = useNavigate()
    
    useEffect(()=>{
       getAllUsers().then(userArray=>{
        setUsers(userArray)
       }) 
    },[])

    useEffect(()=>{
        const foundUser = users.find(user => user.id === currentUser.id)
        setLoggedInUser(foundUser)
    },[users, currentUser])



    return ( 
    <div className="card">
        <div className="card-body">
        <h2 className="card-title">{loggedInUser?.name}</h2>
        <h6 className="card-subtitle mb-2 text-body-secondary">{loggedInUser?.email}</h6>
        <p className="card-text">
            {loggedInUser?.experience}
            {loggedInUser?.experience === 1 ? ' year' : ' years'} of golf experience
        </p>
        <button className="btn btn-primary" onClick={()=>{navigate('/edit-profile')}}>Edit</button>
        <br/><button className="btn btn-success" onClick={()=>{navigate(-1)}}>Back</button>
        </div>
    </div>
    );
}
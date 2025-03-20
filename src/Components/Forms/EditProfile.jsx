import { useEffect, useState } from "react";
import { getAllUsers } from "../../Services/Users.jsx";

export const EditProfile = ({currentUser}) => {
    const [users, setUsers] = useState([])
    const [foundUser, setFoundUser] = useState({})
    
    useEffect(()=>{
        getAllUsers().then(userArray => {
            setUsers(userArray)
        })
    },[])

    useEffect(()=>{
        const findUser = users.find(user => user.id === currentUser.id)
        setFoundUser(findUser)
    },[users, currentUser])

    return (
        <form className="form-container">
        <fieldset>
            <div className="form-name">
            <h3>Name:</h3>
            <input
                className="form-control"
                type="text"
                value={foundUser?.name ? foundUser.name : ""}
                name="name"
                required
            ></input>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-email">
            <h3>Email:</h3>
            <input
                className="form-control"
                type="text"
                value={foundUser?.email ? foundUser.email : ""}
                name="email"
                required
            ></input>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-experience">
            <h3>Years of Experience:</h3>
            <input
                className="form-control"
                type="text"
                value={foundUser?.experience ? foundUser.experience : ""}
                name="experience"
                required
            ></input>
            </div>
        </fieldset>
        </form>
    );
    };

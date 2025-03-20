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

    const handleInputChange = (event) => {
        const stateCopy = {...foundUser}
        stateCopy[event.target.name] = event.target.value
        setFoundUser(stateCopy)
    }

    const formIsValid = foundUser.name !== "" && foundUser.email !== "" && foundUser.experience !== ""

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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
            ></input>
            </div>
        </fieldset>
        {formIsValid ? <button className="btn btn-primary">Save</button> : ""}
        </form>
    );
    };

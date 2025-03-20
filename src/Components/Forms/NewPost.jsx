import { useEffect, useState } from "react"
import "./Forms.css"
import { getCategories } from "../../Services/Categories.jsx"
import { newPost } from "../../Services/PostServices.jsx"
import { useNavigate } from "react-router-dom"

export const NewPost = ({currentUser}) => {
    const [categories, setCategories] = useState([])
    const [chosenCategory, setChosenCategory] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate= useNavigate()

    useEffect(()=>{
        getCategories().then(categoryArray => {
            setCategories(categoryArray)
        })
    },[])

    const currentDate = new Date().toLocaleDateString()

    const handleSave = (event) => {
        event.preventDefault()
        const post = {
            title: title,
            body: body,
            date:  currentDate,
            userId: currentUser.id,
            categoryId: parseInt(chosenCategory)
        }
        newPost(post).then(()=>{
            navigate('/my-posts')
        })
    }

    const formIsValid = title.trim() !== "" && body.trim() !== "" && chosenCategory !== "" && chosenCategory !== "0"

    return(
        <form className="form-container">
            <h2>New Post</h2>
            <fieldset>
                <div className="form-title">
                    <h3>Title:</h3>
                    <input className="form-control" 
                    type="text" placeholder="Enter Title Here" 
                    name="title"
                    required
                    onChange={(event)=>{
                        setTitle(event.target.value)
                    }}>
                     </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-body">
                    <h3>Body:</h3>
                    <input className="form-control form-body" 
                    type="text" placeholder="Type Post Here" 
                    name="body"
                    required
                    onChange={(event)=>{
                        setBody(event.target.value)
                    }}>
                     </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-category">
                    <h3>Category:</h3>
                    <select className="select-topic"
                    onChange={(event)=>{
                        setChosenCategory(event.target.value)
                    }}>
                        <option value="0">Choose a Category</option>
                        {categories.map(category =>{
                            return(<option value={category.id} key={category.id}>{category.name}</option> )
                        })}
                    </select>
                </div>
            </fieldset>
            {formIsValid ? 
            <button className="btn btn-primary" onClick={handleSave}>Save</button> : ""}

        </form>
    )
}
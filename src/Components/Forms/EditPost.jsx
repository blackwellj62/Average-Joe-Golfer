import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPostsById, updatePost } from "../../Services/PostServices.jsx"
import { getCategories } from "../../Services/Categories.jsx"

export const EditPost = ({currentUser}) => {
    const [post, setPost] = useState({})
    const [categories, setCategories] = useState([])
    const {postId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        getPostsById(postId).then(data=>{
            const postObj = data
            setPost(postObj)
        })
    },[postId])

    useEffect(()=>{
        getCategories().then(categoryArray=>{
            setCategories(categoryArray)
        })
    },[])

    const handleInputChange = (event) => {
        const stateCopy = {...post}
        stateCopy[event.target.name] = event.target.value
        setPost(stateCopy)
    }

    const handleSave = (event) => {
        event.preventDefault()
        const editedPost = {
            id: post.id,
            title: post.title,
            body: post.body,
            date: currentDate,
            userId: currentUser.id,
            categoryId: parseInt(post.categoryId),
            imageUrl: post.imageUrl
        }
        updatePost(editedPost).then(()=>{
            navigate("/my-posts")
        })
    }

    const currentDate = new Date().toLocaleDateString()
    const formIsValid = post.title !== "" && post.body !== "" && post.categoryId !== "0"
    
    return(
        <form className="form-container">
            <h2>Edit Post</h2>
            <fieldset>
                <div className="form-title">
                    <h3>Title:</h3>
                    <input className="form-control" 
                    type="text" value={post.title? post.title : ""} 
                    name="title"
                    required
                    onChange={handleInputChange}>
                     </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-body">
                    <h3>Body:</h3>
                    <input className="form-control form-body" 
                    type="text" value={post.body? post.body : ""} 
                    name="body"
                    required
                    onChange={handleInputChange}>
                     </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-image">
                    <h3>Image URL:</h3>
                    <input className="form-control"
                    type="text"
                    value={post.imageUrl? post.imageUrl : ""}
                    name="image"
                    onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-category">
                    <h3>Category:</h3>
                    <select className="select-topic"
                    name="categoryId"
                    onChange={handleInputChange}>
                        <option >{post.category?.name}</option>
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
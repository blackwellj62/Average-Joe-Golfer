import { useEffect, useState } from "react"
import "./Posts.css"
import { getAllPosts } from "../../Services/PostServices.jsx"
import { Link } from "react-router-dom"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(()=>{
        getAllPosts().then(postsArray=>{
            setAllPosts(postsArray)
        })
    },[])

    return (
        allPosts.map(post=>{
            return(

            <div className="card" key={post.id}>
                <div className="card-header">{post.category.name}</div>
                <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                    {post.likes.length}❤️
                </p>
                <Link to={`/${post.id}`} key={post.id}><button className="btn btn-primary">Read Review</button></Link>
                </div>
            </div>
            )
        })
    );
}
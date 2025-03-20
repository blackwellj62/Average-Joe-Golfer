import { useEffect, useState } from "react"
import { deletePost, getAllPosts } from "../../Services/PostServices.jsx"
import { Link } from "react-router-dom"

export const MyPosts = ({currentUser}) => {

    const [allPosts, setAllPosts] = useState([])
    const [userPosts, setUserPosts] = useState([])

    useEffect(()=>{
        reFetch()
    },[])
    
    const reFetch = () => {
        getAllPosts().then(postsArray => {
            setAllPosts(postsArray)
        })    
    }

    useEffect(()=>{
        const foundPosts = allPosts.filter(post =>
            post.userId === currentUser.id
    )
        setUserPosts(foundPosts)
    },[allPosts,currentUser])

    const handleDelete = (userPosts) => {
        deletePost(userPosts).then(()=>{
          reFetch(userPosts)
        })
    }
    
    if (userPosts.length === 0) {
      return (
        <div className="no-posts">
          <p>Oh no! You don't have any posts! Try making a new post:) </p>
        </div>
    )};
    return userPosts.map((post) => {
      return (
        <div className="card" key={post.id}>
          <div className="card-header">{post.category.name}</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.likes.length}❤️</p>
            <Link to={`/${post.id}`} key={post.id}>
              <button className="btn btn-primary">Read Review</button>
            </Link>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={()=>{handleDelete(post.id)}}>Delete</button>
            </div>
          </div>
        </div>
      );
    });
}
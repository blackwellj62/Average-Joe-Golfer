import { useEffect, useState } from "react"
import "./Posts.css"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getPostsById } from "../../Services/PostServices.jsx"
import { LikeButton } from "../LikeButton/LikeButton.jsx"


export const PostDetails = ({currentUser}) => {

    const [post, setPost] = useState({})
    const {postId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        getPostsById(postId).then(data =>{
            const postObj = data
            setPost(postObj)
        })
    },[postId])

    return (
      <div className="card text-center">
        <div className="card-header">
            {post.category?.name}
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
            By:<Link to={`/profile/${post.user?.id}`}>{post.user?.name}<br/></Link>
           {post.date}
          <p className="card-text">
           {post.body}<br/>
          </p>
          {currentUser.id === post.userId ?
          <button className="btn btn-primary" onClick={()=>{navigate(`/edit/${post.id}`)}}>Edit</button> :
          <LikeButton currentUser={currentUser} post={post}/>}
        </div>
        <div className="card-footer text-body-secondary">{post.likes?.length}❤️</div>
        
      </div>
    );
}
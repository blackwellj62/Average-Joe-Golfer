import { useState } from "react";
import "./LikeButton.css"
import { LikedPost } from "../../Services/Likes.jsx";
import { useNavigate } from "react-router-dom";


export const LikeButton = ({currentUser, post}) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate()

    const handleLike = () => {
      
        if (isLiked) {
          setLikes(likes - 1);
          setIsLiked(false);
        } else {
          setLikes(likes + 1);
          setIsLiked(true);
        }
        const newLike = {
          userId: currentUser.id,
          postId: post.id
        }
        LikedPost(newLike).then(()=>{
          navigate("/favorites")
        })
    };
  
    return (
      <div>
        <button className="like-btn" onClick={handleLike}>
          {isLiked ? "❤️" : "🤍"}
        </button>
      </div>
    );
  };
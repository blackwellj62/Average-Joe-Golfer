import { useState } from "react";
import "./LikeButton.css"


export const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
  
    const handleLike = () => {
      if (isLiked) {
        setLikes(likes - 1);
        setIsLiked(false);
      } else {
        setLikes(likes + 1);
        setIsLiked(true);
      }
    };
  
    return (
      <div>
        <button className="like-btn" onClick={handleLike}>
          {isLiked ? "❤️" : "🤍"}
        </button>
      </div>
    );
  };
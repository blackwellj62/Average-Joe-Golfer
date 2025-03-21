import { useEffect, useState } from "react"
import { getAllPosts } from "../../Services/PostServices.jsx"
import { getLikes } from "../../Services/Likes.jsx"
import { Link } from "react-router-dom"

export const Favorites = ({currentUser}) => {
    
    const [allPosts, setAllPosts] = useState([])
    const [allLikes, setAllLikes] = useState([])
    const [filteredLikes, setFilteredLikes] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])

    useEffect(()=>{
        getAllPosts().then(postArray=>{
            setAllPosts(postArray)
        })
    },[])

    useEffect(()=>{
        getLikes().then(likesArray=>{
            setAllLikes(likesArray)
        })
    },[])

    useEffect(()=>{
        const foundLikes = allLikes.filter(like => like.userId === currentUser.id)
        setFilteredLikes(foundLikes)
    },[allLikes,currentUser])

    useEffect(() => {
        const foundPosts = allPosts.filter(post =>
            filteredLikes.some(like => like.postId === post.id)
        );
        setFilteredPosts(foundPosts);   
    }, [filteredLikes, allPosts]);

    if (filteredPosts.length === 0) {
        return (
          <div className="no-posts">
            <p>Oh no! You don't have any favorites! Try liking some posts:) </p>
          </div>
      )};
    return filteredPosts.map((post) => {
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
                <button className="btn btn-danger" >Remove from Favorites</button>
              </div>
            </div>
          </div>
        );
      });
}
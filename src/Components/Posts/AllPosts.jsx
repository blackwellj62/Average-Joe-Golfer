import { useEffect, useState } from "react"
import "./Posts.css"
import { getAllPosts } from "../../Services/PostServices.jsx"
import { Link } from "react-router-dom"
import { FilterBar } from "../FilterBar/FilterBar.jsx"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [chosenCategory, setChosenCategory] = useState([])

    useEffect(()=>{
        getAllPosts().then(postsArray=>{
            setAllPosts(postsArray)
        })
    },[])

    useEffect(()=>{
        const foundPosts = allPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
            setFilteredPosts(foundPosts)
      },[searchTerm, allPosts])

   useEffect(()=>{
       const filterByCategory = allPosts.filter(post=>
            post.category.name === chosenCategory)
            setFilteredPosts(filterByCategory)
            if (chosenCategory === "Choose a Category"){
                setFilteredPosts(allPosts)
            }
           
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[chosenCategory])

    return (
       <div>
           <div>
           <FilterBar setChosenCategory={setChosenCategory} 
           setSearchTerm={setSearchTerm}/>
            </div> 
           {filteredPosts.map(post=>{
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
           })}
       </div>
    );
}
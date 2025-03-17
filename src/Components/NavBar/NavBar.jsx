import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate
    return(
        <ul className="navbar bg-primary" data-bs-theme="dark">
            <li className="navbar-item">
                <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
                <Link to="/posts" className="navbar-link">All Posts</Link>
            </li>
            <li className="navbar-item">
                <Link to="/new-post" className="navbar-link">New Post</Link>
            </li>
            <li className="navbar-item">
                <Link to="/my-posts" className="navbar-link">My Posts</Link>
            </li>
            <li className="navbar-item">
                <Link to="/profile" className="navbar-link">Profile</Link>
            </li>
            {localStorage.getItem("average-joe_user") ? (
  <li className="navbar-logout" >
    <Link
      to=""
      className="navbar-link"
      onClick={() => {
        localStorage.removeItem("average-joe_user")
        navigate("/login", { replace: true })
      }}
    >
      Logout
    </Link>
  </li>
) : (
  ""
)}
        </ul>
    )
}
import { useNavigate } from "react-router-dom"
import "./Home.css"

export const Home = () => {
    const navigate = useNavigate()

    return(
        <>
        <div className="welcome-container">
            <h1>Welcome to Average Joe Golfer</h1>
            <p>where the swings are wild, the putts are questionable, 
            and the only thing lower than our scores is our self-esteem! 
            Grab your clubs... and maybe a stress ball⛳</p>
        </div>
        <div className="button-container">
            <button className="btn btn-warning" onClick={()=>{navigate("/posts")}}>Enter</button>
        </div>
        </>
        
    )
}
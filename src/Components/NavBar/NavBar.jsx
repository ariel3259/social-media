import "./navbar.css";
import {Link, useNavigate} from "react-router-dom"

export const NavBar = (props) => {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    const idUser = localStorage.getItem("idUser");
    const logout = () => {
        localStorage.removeItem("idUser");
        localStorage.removeItem("authorization");
        localStorage.removeItem("username");
        navigate("/");
    }

    return(
        <nav>
            <ul>
                <li>{username}</li>
                <li>
                    <Link 
                        to="/post"
                        style={{textDecoration:"none", color:"black"}}>
                            Home
                    </Link>
                    </li>
                <li>
                    <Link
                        to={`/post/${username}`}
                        style={{textDecoration:"none", color:"black"}}>
                            View my posts
                    </Link>
                </li>
                <li>View my comments</li>
                <li>
                    <Link 
                        to={`/profile/${idUser}`}
                        style={{textDecoration:"none", color:"black"}}>
                        Profile
                    </Link>
                    </li>
                <li 
                    onClick={logout}
                    style={{cursor:"pointer"}}>
                        Logout
                </li>
                {props.children}
            </ul>
        </nav>
    )
}
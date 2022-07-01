import "./navbar.css";
import {Link, useNavigate} from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate();
    const idUser = localStorage.getItem("idUser");
    const logout = () => {
        localStorage.removeItem("idUser");
        localStorage.removeItem("authorization");
        navigate("/");
    }

    return(
        <nav>
            <ul>
                <li>Username</li>
                <li>
                    <Link 
                        to="/post"
                        style={{textDecoration:"none", color:"black"}}>
                            Home
                    </Link>
                    </li>
                <li>View my posts</li>
                <li>View my comments</li>
                <li>
                    <Link 
                        to={`/profile/${idUser}`}
                        style={{textDecoration:"none", color:"black"}}>
                        Profile
                    </Link>
                    </li>
                <li onClick={logout}>Logout</li>
            </ul>
        </nav>
    )
}
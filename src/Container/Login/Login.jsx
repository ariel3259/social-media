import { useReducer } from "react"
import { UsersReducer, initialState } from "../../Reducers/usersReducers";
import {GridContainer} from "../../Components/GridContainer/GridContainer";
import * as userActions from "../../Actions/UsersAction";
import "./login.css";
import { Link } from "react-router-dom";

export const Login = () => {

    const [user, dispatch] = useReducer(UsersReducer, initialState);

    const onChangeUsername = (e) => dispatch(userActions.actionChangeUsername(e.target.value));
    const onChangePassword = (e) => dispatch(userActions.actionChangePassword(e.target.value));
    const onSubmitLogin = async (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            username: user.username,
            password: user.password
        });
        const response = await fetch("https://api-social-media-1.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        const {token} = await response.json();
        console.log(response.status);
        console.log(token);
        
    }
    
    return (
        <>
            <GridContainer 
                row={12}
                column={12}
                height={100}
                bg="#01386C">
                    <form 
                        className="login-container"
                        onSubmit={onSubmitLogin}>
                        <div className="field">
                            <h1>Log in</h1>
                        </div>
                        <div className="field">
                            <label>Username</label>
                            <input 
                                type="text" 
                                className="username-login"
                                onChange={onChangeUsername} />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input 
                                type="text"
                                className="password-login"
                                onChange={onChangePassword} />
                        </div>
                        <div className="field">
                            <button className="btn-login" type="submit">
                                Login
                            </button>
                            <Link to="/register" className="btn-register">
                                Register
                            </Link>
                        </div>
                    </form>
            </GridContainer>
        </>
    )
}
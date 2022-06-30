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

    return (
        <>
            <GridContainer 
                row="12"
                column="12"
                height={100}
                bg="#01386C">
                    <div className="login-container">
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
                            <a className="btn-login">
                                Login
                            </a>
                            <Link to="/register" className="btn-register">
                                Register
                            </Link>
                        </div>
                    </div>
            </GridContainer>
        </>
    )
}
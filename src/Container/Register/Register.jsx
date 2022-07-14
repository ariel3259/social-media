import {GridContainer} from "../../Components/GridContainer/GridContainer";
import "../Login/loginAndRegister.css"
import { UsersReducer, initialState } from "../../Reducers/usersReducers";
import * as userActions from "../../Actions/UsersAction";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Register = () => {

    const [user, dispatch] = useReducer(UsersReducer, initialState);
    const navigate = useNavigate();

    const onChangeName = (e) => dispatch(userActions.actionChangeName(e.target.value));
    const onChangeLastName = (e) => dispatch(userActions.actionChangeLastName(e.target.value));
    const onChangeUsername = (e) => dispatch(userActions.actionChangeUsername(e.target.value));
    const onChangePassword = (e) => dispatch(userActions.actionChangePassword(e.target.value));
    const onSubmitRegister = async (e) => {
        e.preventDefault();
        const data = JSON.stringify(user);
            const request = await fetch("https://api-social-media-1.herokuapp.com/api2/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: data
            });
            const response = await request.text();
            navigate("/");
    }   


    return(
        <>
            <GridContainer
                row={12}
                column={12}
                height={100}
                bg="#01386C">
                  <form 
                        className="login-container"
                        onSubmit={onSubmitRegister}>
                        <div className="field">
                            <h1>Register</h1>
                        </div>  
                        
                        <div className="field">
                            <label>Name</label>
                            <input 
                                type="text" 
                                onChange={onChangeName} />
                        </div>

                        <div className="field">
                            <label>LastName</label>
                            <input 
                                type="text" 
                                onChange={onChangeLastName} />
                        </div>

                        <div className="field">
                            <label>Username</label>
                            <input 
                                type="text" 
                                onChange={onChangeUsername} />
                        </div>
                        
                        <div className="field">
                            <label>Password</label>
                            <input 
                                type="password"
                                onChange={onChangePassword} />
                        </div>
                        <div className="field">
                            <button className="btn-login" type="submit">
                                Register
                            </button>
                            <Link to="/" className="btn-register">
                                Come back
                            </Link>
                        </div>
                    </form>
            </GridContainer>
        </>
    )
}
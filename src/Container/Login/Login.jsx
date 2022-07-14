import { useReducer } from "react"
import { UsersReducer, initialState } from "../../Reducers/usersReducers";
import { GridContainer } from "../../Components/GridContainer/GridContainer";
import { actionChangeUsername, actionChangePassword } from "../../Actions/UsersAction";
import "./loginAndRegister.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Field } from "../../Components/Field/Field";

export const Login = () => {

    const [user, dispatch] = useReducer(UsersReducer, initialState);
    const navigate = useNavigate();

    const onChangeUsername = (e) => dispatch(actionChangeUsername(e.target.value));
    const onChangePassword = (e) => dispatch(actionChangePassword(e.target.value));
    const onSubmitLogin = async (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            username: user.username,
            password: user.password
        });
        const request = await fetch("https://api-social-media-1.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        const response = await request.json();
        if(request.status < 400) {
            localStorage.setItem("authorization", "Bearer " + response.token);
            localStorage.setItem("username", user.username);
            localStorage.setItem("idUser", response.idUser);
            navigate("/home");
        }
        
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
                        <Field 
                            name="Username"
                            type="text"
                            event={onChangeUsername}/>
                        <Field 
                            name="Password"
                            type="password"
                            event={onChangePassword}/>
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
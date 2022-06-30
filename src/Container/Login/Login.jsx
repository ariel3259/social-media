import { useReducer } from "react"
import { UsersReducer, initialState } from "../../Reducers/usersReducers";
import {GridContainer} from "../../Components/GridContainer/GridContainer";
import * as userActions from "../../Actions/UsersAction";
import "./login.css";

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

                    </div>
            </GridContainer>
        </>
    )
}
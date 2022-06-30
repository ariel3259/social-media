import {USER} from "../Actions/UsersAction";

export const initialState = {
    name: "",
    lastName: "",
    password: "",
    username: ""
}

export const UsersReducer = (state, { type, payload }) => {
    switch(type){
        case USER.NAME: 
            return {...state, name : payload};
        case USER.LASTNAME:
            return {...state, lastName : payload};
        case USER.USERNAME:
            return {...state, username: payload};
        case USER.PASSWORD:
            return {...state, password: payload};
        default:
            return state;
    }    
}
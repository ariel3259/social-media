import { POST } from "../Actions/PostActions"

export const initialState = {
    title: "",
    body: "",
    idUser: 0
}

export const postReducer = (state, {type, payload}) => {
    switch(type){
        case POST.TITLE: 
            return {...state, title: payload};
        case POST.BODY:
            return {...state, body: payload};
        case POST.IDUSER:
            return {...state, idUser: payload};
        default:
            return state;
    }
}
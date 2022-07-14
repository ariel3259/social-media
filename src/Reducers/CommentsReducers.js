import {COMMENTS} from "../Actions/CommentsAction";

export const initialState = {
    idPost: 0,
    idUser: 0,
    message: ""
};

export const CommentsReducers = (state, {type, payload}) => {
    switch(type){
        case COMMENTS.IDPOST:
            return {...state, idPost: payload};
        case COMMENTS.IDUSER:
            return {...state, idUser: payload};
        case COMMENTS.MESSAGE: 
            return {...state, message: payload};
        default:
            return state;
    }
}
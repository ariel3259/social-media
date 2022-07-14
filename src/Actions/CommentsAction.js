export const COMMENTS = {
    IDPOST,
    IDUSER,
    MESSAGE
}

export const actionChangeIdPost = (idPost) => ({
    type: COMMENTS.IDPOST,
    payload: idPost
});

export const actionChangeIdUser = (idUser) => ({
    type: COMMENTS.IDUSER,
    payload: idUser
});

export const actionChangeMessage = (message) => ({
    type: COMMENTS.MESSAGE,
    payload: message
});
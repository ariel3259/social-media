export const POST = {
    TITLE: "TITLE",
    BODY: "BODY", 
    IDUSER: "IDUSER"
}

export const actionChangeTitle = (title) => ({
    type: POST.TITLE,
    payload: title
});

export const actionChangeBody = (body) => ({
    type: POST.BODY,
    payload: body
});

export const actionChangeIdUser = (idUser) => ({
    type: POST.IDUSER,
    payload: idUser
});
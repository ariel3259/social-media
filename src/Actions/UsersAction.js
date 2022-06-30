export const USER = {
    NAME: "NAME",
    LASTNAME: "LASTNAME",
    USERNAME: "USERNAME",
    PASSWORD: "PASSWORD"
}

export const actionChangeName = (name) => ({
    type: USER.NAME,
    payload: name
});

export const actionChangeLastName = (lastName) => ({
    type: USER.LASTNAME,
    payload: lastName
});

export const actionChangeUsername = (username) => ({
    type: USER.USERNAME,
    payload: username
});

export const actionChangePassword = (password) => ({
    type: USER.PASSWORD,
    payload: password
});
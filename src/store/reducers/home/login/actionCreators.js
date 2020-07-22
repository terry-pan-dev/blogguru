import { SEND_LOGIN_FORM, LOGOUT } from "./actions"
export const sendLoginForm = (payload) => ({
    type: SEND_LOGIN_FORM,
    payload: payload
})

export const logout = () => ({
    type: LOGOUT
})
import { AuthDataI } from "@/models/auth";

export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const ERROR_MESSAGE = "error_message";

export const loginAction = (loginData: AuthDataI) => ({type: LOGIN, payload: loginData});
export const registerAction = (registerData: AuthDataI) => ({type: REGISTER, payload: registerData});
export const logoutAction = () => ({type: LOGOUT});
export const errorMessageAction = (errorMessageData: {message: String | null}) => ({type: ERROR_MESSAGE, payload: errorMessageData});

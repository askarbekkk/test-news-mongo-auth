import axios from "axios"
import cookie from "js-cookie";
import {history} from "../../lib/history";


export const signIn = (data) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/api/v1/signin", data)
            .then(({data}) => {
                cookie.set("token", data.token, {expires: 1})
                return dispatch({type: "USER_SIGNIN", payload: data.user})
                history.push("/")
            })
    }
}

export const logout = () => {
    cookie.remove("token")
    return {type: "USER_LOGOUT"}
}
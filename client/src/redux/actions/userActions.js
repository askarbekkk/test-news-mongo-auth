import axios from "axios"
import cookie from "js-cookie";


 export const signIn = (data) => {
   return (dispatch) => {
    axios.post("http://localhost:8000/api/v1/signin", data)
        .then(({data}) => {
            cookie.set("token", data.token, {expiresIn: "1d"})
            return dispatch({type:"USER_SIGNIN", payload: data.user})
        })
   }
}
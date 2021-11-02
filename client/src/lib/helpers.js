import cookie from "js-cookie";


export const isAuth = () => {
    const checkToken = cookie.get("token")
    if (checkToken) {
        if (localStorage.getItem("user")) {
            return JSON.parse(localStorage.getItem("user"))
        } else {
            return false
        }
    }
}

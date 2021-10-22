import cookie from "js-cookie";

export const authenticate = (data) => {
    cookie.set("token", data.token, {expiresIn: "1d"})
    localStorage.setItem("user", JSON.stringify(data.user))
}

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

export const logout = () => {
    localStorage.removeItem("user")
    cookie.remove("token")
}
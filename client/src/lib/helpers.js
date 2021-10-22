import cookie from "js-cookie";
import {toast} from "react-toastify";

export const authenticate = (data) => {
    cookie.set("token", data.token, {expiresIn: "1d"})
    toast.success(data?.message)
    localStorage.setItem("user", JSON.stringify(data.user))
}
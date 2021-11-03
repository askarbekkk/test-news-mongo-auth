import axios from "axios";
import cookie from "js-cookie";


export const getNews = () =>{
    return (dispatch) =>{
        dispatch({type: "NEWS_REQUEST"})
        const headers = {"auth-token": cookie.get("token")}
        axios("http://localhost:8000/api/v1/news", {headers})
            .then(({data}) => {
                dispatch({type: "NEWS_SUCCESS", payload: data})
            })
            .catch((error) => {
                dispatch({type: "NEWS_FAILED"})
            })
    }
}
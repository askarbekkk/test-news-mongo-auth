import axios from "axios";


export const getNews = () =>{
    return (dispatch) =>{
        dispatch({type: "NEWS_REQUEST"})
        axios("http://localhost:8000/api/v1/news")
            .then(({data}) => {
                dispatch({type: "NEWS_SUCCESS", payload: data})
            })
            .catch((error) => {
                dispatch({type: "NEWS_FAILED"})
            })
    }
}
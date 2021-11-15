import axios from "axios";

export const getOneNews = (id) =>{
    return (dispatch) =>{
        dispatch({type: "NEWS_DETAILS_REQUEST"})
        axios(`http://localhost:8000/api/v1/news/${id}`)
            .then(({data}) => {
                dispatch({type: "NEWS_DETAILS_SUCCESS", payload: data})
            })
            .catch((error) => {
                dispatch({type: "NEWS_DETAILS_FAILED", payload: error})
            })
    }
}


import axiosV1 from "../../services/customAxios";


export const getNews = () =>{
    return (dispatch) =>{
        dispatch({type: "NEWS_REQUEST"})
        axiosV1("http://localhost:8000/api/v1/news")
            .then(({data}) => {
                dispatch({type: "NEWS_SUCCESS", payload: data})
            })
            .catch((error) => {
                dispatch({type: "NEWS_FAILED"})
            })
    }
}
import axiosV1 from "../../services/customAxios";
import axios from "axios";
import {toast} from "react-toastify";


export const getNews = () =>{
    return (dispatch) =>{
        dispatch({type: "NEWS_REQUEST"})
        axiosV1("http://localhost:8000/api/v1/news")
            .then(({data}) => {
                dispatch({type: "NEWS_SUCCESS", payload: data})
            })
            .catch((error) => {
                dispatch({type: "NEWS_FAILED", payload: error})
            })
    }
}

export const addNews = (newNews) => {
  return (dispatch) =>{
      axios.post("http://localhost:8000/api/v1/news", newNews)
          .then(({data}) => {
              console.log(data)
              dispatch({type: "ADD_NEWS", payload: data})
              toast.success("News successfully created!")
          })
          .catch((error) => {
              dispatch({type: "ADD_NEWS_FAILED", payload: error})
              toast.error("Error to created news!")
          })
  }
}
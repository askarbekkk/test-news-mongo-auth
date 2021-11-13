import axios from "axios";
import {toast} from "react-toastify";

export const addComment = (newComment) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/api/v1/comments", newComment)
            .then(({data}) => {
                dispatch({type: "ADD_COMMENT_SUCCESS", payload: data})
                toast.success("Comment added")
            })
            .catch(() => toast.error("Error to add comment"))
    }
}

export const deleteOneComment = (id) =>{
    return (dispatch) =>{
        axios.delete(`http://localhost:8000/api/v1/comments/delete/${id}`)
            .then(({data}) => {
                dispatch({type: "DELETE_COMMENT", payload: data})
                toast.success("Comment deleted")
            })
    }
}

export const like = (id) => {
    return (dispatch, getState) => {
        axios.patch(`http://localhost:8000/api/v1/comments/like/${id}`)
            .then(({data}) => {

                dispatch({type: "LIKE", payload: data})
                toast.success("Like")
                console.log(getState().user)
            })
            .catch(() => toast.error("Error to liked"))
    }
}

export const disLike = (id) => {
    return (dispatch) => {
        axios.patch(`http://localhost:8000/api/v1/comments/dislike/${id}`)
            .then(({data}) => {
                dispatch({type: "DISLIKE", payload: data})
                toast.success("Dislike")
            })
            .catch(() => toast.error("Error to disliked"))
    }
}

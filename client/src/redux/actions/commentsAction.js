import axios from "axios";
import {toast} from "react-toastify";

export const addComment = (newComment) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/api/v1/comments", newComment)
            .then(({data}) => {
                dispatch({type: "ADD_COMMENT", payload: data})
                toast.success("Comment added")
            })

    }
}
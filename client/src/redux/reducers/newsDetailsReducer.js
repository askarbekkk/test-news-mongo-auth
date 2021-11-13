
const initialState = {
    newsDetails:{},
    isLoading: true,
    error: ""
}

export const newsDetailsReducer = (state = initialState, action) => {
    switch (action.type){
        case "NEWS_DETAILS_REQUEST":
            return {...state, isLoading: true}
        case "NEWS_DETAILS_SUCCESS":
            return {...state, newsDetails: action.payload, isLoading: false}
        case "NEWS_DETAILS_FAILED":
            return {...state, error: action.payload, isLoading: false}
        case "ADD_COMMENT_SUCCESS":
            return {...state, newsDetails: {...state.newsDetails, comments:[...state.newsDetails.comments, action.payload]}}
        case "DELETE_COMMENT":
            return {...state, comments: [...state.comments, action.payload]}
        case"LIKE":
            return {...state, newsDetails: {...state.newsDetails, comments: state.newsDetails.comments.map(el =>
                    el._id === action.payload._id ? action.payload : el
                    )}}
        case"DISLIKE":
            return {...state, newsDetails: {...state.newsDetails, comments: state.newsDetails.comments.map(el =>
                        el._id === action.payload._id ? action.payload : el
                    )}}
        default:
            return state
    }
}
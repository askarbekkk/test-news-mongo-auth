const initialState = {
    newsDetails:{},
    isLoading: false,
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
        default:
            return state
    }
}
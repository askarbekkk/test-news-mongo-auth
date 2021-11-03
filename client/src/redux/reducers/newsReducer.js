const initialState = {
    news: [],
    isLoading: false,
    error: ""
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type){
        case "NEWS_REQUEST":
            return {...state, isLoading: true}
        case "NEWS_SUCCESS":
            return {...state, news: action.payload, isLoading: false}
        case "NEWS_FAILED":
            return {...state, error: action.payload, isLoading: false}
        case "ADD_NEWS":
            return {...state, news: [...state.news, action.payload], isLoading: false}
        case "ADD_NEWS_FAILED":
            return {...state, error: action.payload, isLoading: false}
        default:
            return state
    }
}
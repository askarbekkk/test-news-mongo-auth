const initialState = {
    comments:[],
    likes: 0
}

export const commentsReducer = (state = initialState, action) =>{
    switch (action.type){
        // case "ADD_COMMENT":
        //     return {...state, comments: [...state.comments, action.payload]}
        case "DELETE_COMMENT":
            return {...state, comments: [...state.comments, action.payload]}
        // case"LIKE":
        //     return {...state, likes: state.likes +1}
        case"DISLIKE":
            return {...state, likes: state.likes -1}
        default:
            return state
    }
}
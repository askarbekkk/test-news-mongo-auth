const initialState = {
    user: {},
    auth: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case "USER_SIGNIN":
            return {...state, user: action.payload, auth: true}
        case "USER_LOGOUT":
            return initialState
        case "USER_AUTHENTICATE":
            return {...state, user: action.payload, auth: true}
        default:
            return state
    }
}
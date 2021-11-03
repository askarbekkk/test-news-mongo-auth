const initialState = {
    user: {},
    auth: false,
    headerLoading: true
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case "USER_SIGNIN":
            return {...state, user: action.payload, auth: true}
        case "USER_LOGOUT":
            return {...initialState, headerLoading:false}
        case "USER_AUTHENTICATE":
            return {...state, user: action.payload, auth: true, headerLoading: false}
        case "USER_AUTHENTICATE_FAILED":
            return {...state, headerLoading: false}
        default:
            return state
    }
}
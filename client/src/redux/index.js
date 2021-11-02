import {combineReducers, createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly"
import {userReducer} from "./reducers/userReducer"
import thunk from "redux-thunk"
import {newsReducer} from "./reducers/newsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
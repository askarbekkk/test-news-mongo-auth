import {combineReducers, createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly"
import {userReducer} from "./reducers/userReducer"
import thunk from "redux-thunk"
import {newsReducer} from "./reducers/newsReducer";
import {commentsReducer} from "./reducers/commentsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducer,
    comments: commentsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
import {combineReducers, createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly"
import {userReducer} from "./reducers/userReducer"
import thunk from "redux-thunk"
import {newsReducer} from "./reducers/newsReducer";
import {commentsReducer} from "./reducers/commentsReducer";
import {newsDetailsReducer} from "./reducers/newsDetailsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducer,
    newsDetails: newsDetailsReducer,
    comments: commentsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
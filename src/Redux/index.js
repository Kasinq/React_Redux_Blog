import { combineReducers } from "redux";
import { newsReduser, selectedNewComments, selectedNewReduser } from "./reducers/newsReducer";

const reducers = combineReducers({
    newsPage: newsReduser,
    newPage: selectedNewReduser,
    newComments: selectedNewComments
})

export default reducers
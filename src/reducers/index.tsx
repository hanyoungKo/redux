import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos"
import post from "./post";

const rootReducer = combineReducers({
    counter,
    todos,
    post,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
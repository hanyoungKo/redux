import { combineReducers } from "redux";
import counter from './counter';
import todo from "./todo";
import posts from './posts';
const rootReducer = combineReducers({
    counter,
    todo,
    posts
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
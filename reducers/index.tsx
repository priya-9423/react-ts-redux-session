import { createStore, combineReducers } from "redux";
import todos from './TodoReducer'
import filters from './FilterReducer';

let reducer = combineReducers({todos,filters})

export default(reducer)
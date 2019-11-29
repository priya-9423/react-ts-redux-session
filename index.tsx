import {createStore, combineReducers} from 'redux';
import todo from './reducers/TodoReducer';
import filter from './reducers/FilterReducer';

let store = createStore(
  combineReducers({todo,filter})
);

store.subscribe(() => console.log(store.getState()));

store.dispatch({type:"ADD_TODO", text:"Milk"});
store.dispatch({type:"ADD_TODO", text:"Butter"});
store.dispatch({type:"SET_FILTER", visibility:"SHOW_ALL"});
store.dispatch({type:"MARK_COMPLETED", text:"Butter"});
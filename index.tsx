import {createStore, combineReducers} from 'redux';
import React, { Component } from 'react';
import { render } from 'react-dom';

import todo from './reducers/TodoReducer';
import filter from './reducers/FilterReducer';
import AddTodos from './Components/AddTodos'
import ToDoItem from './Components/TodoItem'
import TodoList from './Components/ToDoList'

class App extends Component {
  
store =createStore(
   combineReducers({todo,filter}));

  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
    

   this.store.subscribe(() => console.log(this.store.getState()));

this.store.dispatch({type:"ADD_TODO", text:"Milk"});
this.store.dispatch({type:"ADD_TODO", text:"Butter"});
this.store.dispatch({type:"SET_FILTER", visibility:"SHOW_ALL"});
this.store.dispatch({type:"MARK_COMPLETED", text:"Butter"});
  }

itemClicked=(e)=>{
  console.log(e)
}

  render() {
    return (
      <div>
        <AddTodos />
        <TodoList todos={[{text:'test',isCompleted:true}, {text:'tetestr1st',isCompleted:false}]} onClick= {this.itemClicked}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


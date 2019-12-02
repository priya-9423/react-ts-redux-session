import React from 'react'
import ToDoItem from './TodoItem';

let todoList = ({todos,onClick}) =>{
  return(
  <ul>
  {todos.map((item,index) =>(
    <ToDoItem {...item} onClick={()=> onClick(item.text)}/>
  ))}
  </ul>
  )
}

export default todoList
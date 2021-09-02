import React from 'react'
import Todo from './Todo'

const List = ({ todos, setTodos }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo key={todo.name} todo={todo} setTodos={setTodos}/>
      ))}
    </ul>
  )
}

export default List

import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import Footer from './List/Footer'

const Todos = () => {
  const [todos, setTodos] = useState([{ name: "Çöpü at", completed: true }, { name: "Yemek yap", completed: false }])
  const [activeFilter, setActiveFilter] = useState("All")

  let filtered = todos
  if (activeFilter === "Active") {
    filtered = todos.filter(t => !t.completed)
  } else if (activeFilter === "Completed") {
    filtered = todos.filter(t => t.completed)
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Form setTodos={setTodos} />
        <List todos={filtered} setTodos={setTodos} />
        <Footer
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          todos={filtered}
          setTodos={setTodos}
        />
      </header>
    </section >
  )
}

export default Todos

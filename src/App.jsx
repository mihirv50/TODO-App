import React, { useState } from 'react'
import Todoinput from './components/Todoinput'
import Todoitem from './components/Todoitem'

const App = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo()
  }

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo])
      setTodo("")
    }
  }

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className='w-screen h-screen bg-[#FFECD8] flex items-center justify-center'>
      <div className='w-[40vw] min-h-[40vw] bg-white'>
        <h1 className='text-3xl font-semibold px-5 py-2'>TODO</h1>
        <hr/>
        <Todoinput todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
        <ul className=''>
          {todos.map((todo, index) => (
            <Todoitem key={index} index={index} todo={todo} removeTodo={removeTodo} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App

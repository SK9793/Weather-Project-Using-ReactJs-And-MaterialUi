import React, { useState } from 'react'
import { useTodo } from '../TodoContext'

const Todoform = () => {

const [todo,settodo] = useState("") // this is for indivisual Todo!!!!

const {addTodo} = useTodo()

const add = (e) => {
 e.preventDefault()
 if(!todo)  return 
 
  addTodo({todo,completed:false})
  settodo("")
 
 
 
 

}

  return (
    
        <form onSubmit={add} className='flex' >
            <input type='text' value={todo} onChange={(e) => settodo(e.target.value) }   placeholder='enter your task' className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"/>
            <button className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" type='submit'>Add</button>
        </form>
    
  )
}

export default Todoform;
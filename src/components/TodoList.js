import React from 'react'
import './TodoList.css'

import { FaCheck, FaEdit, FaTrashAlt } from 'react-icons/fa'


const TodoList = ({todos, setTodos, editTodo, setEditTodo, setInput}) => {

    const deleteTodo = ({id}) => {
        const filteredTodos = todos.filter( (todoObj) => {
            return todoObj.id !== id
        })
        
        setTodos(filteredTodos) 
    }

    const handleComplete = (todo) => {
        const completeTodos = todos.map((item) => {
            if(item.id === todo.id){
                return {...item, completed: !todo.completed}
            } 
            return item
        })

        setTodos(completeTodos)
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)

        //returns the object console.log(findTodo)
        setEditTodo(findTodo)
    }

    return (
        <div className='todolist-h2'>
            <h2>{ todos.length > 0 ? "Todos" : "No Todos"}</h2>
                <ul className="unorderedTodos">
                {todos.map((todo) => (
                    
                    <li key={todo.id}> 
                        <input type="text" 
                        value={todo.item} 
                        className={ todo.completed ? "completed" : ""}
                        onChange={(e) => e.preventDefault()} 
                        />

                        <button onClick={() => handleComplete(todo)}><FaCheck /></button> 
                        <button onClick={() => handleEdit(todo)}><FaEdit /></button> 
                        <button onClick={() => deleteTodo(todo)}><FaTrashAlt/></button> 
                    </li> 
     
                    ))
                } 
                </ul>                      
        </div>
    )
}

export default TodoList
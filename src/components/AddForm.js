import React, {useEffect} from 'react'
import { v4 as uuidv4 } from "uuid"
import './AddForm.css'

const AddForm = ({todos, setTodos, input, setInput, editTodo, setEditTodo }) => {


    const updateTodo = (item, id) => {
        const newTodo = todos.map((todo) => {
            if(todo.id === id){
                return {...todo, item}
            }
            return todo
        })

        setTodos(newTodo)
        setEditTodo("")
    }

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    useEffect(() => 
    {
        if(editTodo){
            setInput(editTodo.item)
        }else{ 
            setInput("")
        }
    },[setInput, editTodo])

    const addTodos = (event) => {
        event.preventDefault()

        if(!editTodo){
            setTodos([...todos, {id : uuidv4(), item : input, completed: false}])
            setInput('') 
        }
        else {
            updateTodo(input, editTodo.id)    
        }
    }

    const handleclear = () => {
        setEditTodo('')
        setInput('')
    }

    return (
        <div className="form-todo">
            <form onSubmit={addTodos}>
                <input onChange={onInputChange} value={input} type="text" placeholder='Enter Todo' required/>
                <button type="submit" className='button-add'>
                    {editTodo ? "Update" : "Add"} 
                </button>
                <button onClick={ handleclear } type="submit" className='button-add'>
                    Clear
                </button>
            </form>
        </div>
    )
}

export default AddForm

import React, { useReducer, useState } from 'react'
import { createRoot } from 'react-dom/client'

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
}

function Todo({ todo, dispatch }) {
    const { name } = todo
    console.log(name)
    return (
        <div className="p-2 border-2 rounded w-[100%] m-auto grid grid-cols-3 gap-2 mb-5 bg-black" style={{ borderColor: todo.complete ? 'gray' : '' }}>
            <span style={{ color: todo.complete ? 'gray' : 'white' }} > {todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })} type='button' className="bg-gray-500 p-2 rounded-xl">Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })} type='button' className="bg-gray-500 p-2 rounded-xl">Delete</button>
        </div >
    )
}


function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}


function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
    }
}




export default function ReducerComponent() {
    const [todos, dispatch] = useReducer(reducer, [{ id: 0, name: 'Leche', complete: false }])
    const [name, setName] = useState('')

    console.log(todos)

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }

    return (
        <center>
            <div className="bg-blue p-5 border-4 w-[100%] h-[100vh] border-gray-500 bg-blue-400 flex justify-center align-center items-center">
                <div className="bg-gray-800 flex-column border-4 w-[600px] h-auto p-5 rounded-xl">
                    <h3 className="m-5 font-semibold text-fuchsia-700 text-[20px] place-self-center"> Todos Reducer</h3>
                    <form onSubmit={handleSubmit} className='m-5'>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Escribe tu tarea aqui...' className="p-2 border-2 border-blue bg-gray-500 place-self-center" />
                    </form>
                    {todos.map(todo => {
                        return (
                            < Todo key={todo.id} todo={todo} dispatch={dispatch} />
                        )
                    })}
                </div>
            </div>
        </center>
    )

}

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< ReducerComponent />)
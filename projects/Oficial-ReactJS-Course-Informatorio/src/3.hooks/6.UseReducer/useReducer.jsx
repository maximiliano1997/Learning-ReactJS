import React, { useReducer } from 'react'
import { createRoot } from 'react-dom/client'

const INITIAL_STATE = {
    count: 0,
    title: 'useReducer ;D',
};

function countReducer(state, action) {
    if (action.type === 'sumar') {
        return { ...state, count: state.count + action.payload }
    }

    if (action.type === 'restar') {
        if (state.count > 0) {
            return { ...state, count: state.count - action.payload }
        }

        return state
    }

    return state
}

function Home() {
    const [state, dispatch] = useReducer(countReducer, INITIAL_STATE);


    return (
        <>
            <h2>{state.title}</h2>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: 'sumar', payload: 5 })}>Sumar</button>
            <button onClick={() => dispatch({ type: 'restar', payload: 3 })}>Restar</button>
        </>
    )
}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< Home />)
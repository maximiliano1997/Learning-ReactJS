import Reacr, { useReducer } from 'react';



const INITIAL_STATE = {
    count: 0,
}

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            if (state.count > 0) {
                return { count: state.count - 1 }
            }
        case 'default':
            return { count: state.count }
    }
}

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


    return (
        <center>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })} className="bg-green-500 p-2 rounded-xl"> Increment</button >
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })} className="bg-red-500 p-2 rounded-xl"> Decrement</button >
        </center>
    )
}
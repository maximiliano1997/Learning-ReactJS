import React from 'react';
import { createRoot } from 'react-dom/client';

// Props
// {
//     text: 'Hola soy un boton',
//         color: 'red'
// }



function Button({ color = '#8b5cf6', children }) {
    console.log(children)

    return (
        <button style={{
            backgroundColor: color,
            color: '#32e8f0',
            fontSize: '24px',
            padding: '5px 20px',
            cursor: 'pointer',
        }}>

            {children}

        </button>
    )
}


function App() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'gray',
        }}>

            <Button color='red'>Hola todo bien ?</Button>
            <Button>Dame Click!</Button>

        </div>
    );
}

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<App />)
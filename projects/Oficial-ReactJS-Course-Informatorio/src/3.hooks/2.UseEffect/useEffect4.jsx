import React, { useState, useEffect, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TbArrowBigRight } from "react-icons/tb";



function createConnection() {
    return {
        connect: () => console.log('Me conecte OK'),
        disconnect: () => console.log('Me desconecte FAIL')
    };
}


function Home() {
    const [count, setCount] = useState()
    const [name, setName] = useState('')

    useEffect(() => {
        const connection = createConnection();
        connection.connect()


        // Cleanup function
        return () => {
            connection.disconnect();
        };
    }, [name, count]);  // <--- debes usar la dependency de useEffect para que el cleanup se realice.

    return (
        <>
            <h2>UseEffect :D</h2>
            <button onClick={() => setCount(count + 1)}>Sumar</button>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TbArrowBigRight />
        </>
    )
}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<Home />)
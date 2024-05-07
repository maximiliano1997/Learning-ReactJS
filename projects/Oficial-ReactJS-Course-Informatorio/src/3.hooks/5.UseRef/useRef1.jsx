import React, { useEffect, useState, useRef } from 'react'
import { createRoot } from 'react-dom/client'

export default function ContadorSinRerender() {
    const [name, setName] = useState('')
    const renderCount = useRef(0)

    console.log('rendered')
    useEffect(() => {
        const intervalId = setInterval(() => {
            renderCount.current = renderCount.current + 1
            // console.log(renderCount.current)
        }, 1000)

        return () => clearInterval(intervalId), console.log('limpieza')
    }, [])

    return (
        <>
            <h1>Contador sin-rerenderizacion</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
            <div>My name is: {name}</div>
            <div>I rendered {renderCount.current} time</div>
        </>
    )
}




const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< ContadorSinRerender />)

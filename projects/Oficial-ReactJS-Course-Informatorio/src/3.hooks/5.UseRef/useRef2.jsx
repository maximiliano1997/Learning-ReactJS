import React, { useEffect, useState, useRef } from 'react'
import { createRoot } from 'react-dom/client'

export default function FormularioSinEstado() {

    // Utilizamos useRef para almacenar la referencia al input
    const inputRef = useRef(null)

    useEffect(() => {
        const handleInputChange = () => {
            // Accedemos al valor actual del input utiliando la propiedad current de useRef
            console.log(`Valor del input: ${inputRef.current.value}`);
        }

        // Agregamos un event listener al input para captpurar cambios
        inputRef.current.addEventListener('input', handleInputChange);

        // Limpiamos el event listener en el cleanup de useEffect
        return () => {
            inputRef.current.removeEventListener('input', handleInputChange)
        }
    }, [])

    return (

        <div>
            <h1>Captura de Input sin Estado</h1>
            <input type="text" ref={inputRef} />
        </div>
    )
}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< FormularioSinEstado />)

import React, { useRef, useEffect } from 'react';

export default function FormularioSinEstado() {

    //Utilizamos useRef para almacenar la referencia al input
    const inputRef = useRef(null);

    useEffect(() => {
        const handleInputChange = () => {
            // Accedemos al valor actual del input utilizando la propiedad current de useRef
            console.log(`Valor del input: ${inputRef.current.value}`);
        };

        // Agregamos un event listener al input para capturar cambios
        inputRef.current.addEventListener('input', handleInputChange);

        // Limpiamos el event listener en el cleanup de useEffect
        return () => {
            inputRef.current.removeEventListener('input', handleInputChange);
        }
    }, [])

    return (
        <div>
            <h1>Captpura de Input sin Estado</h1>
            <input type="text" ref={inputRef} />
        </div>
    )
}
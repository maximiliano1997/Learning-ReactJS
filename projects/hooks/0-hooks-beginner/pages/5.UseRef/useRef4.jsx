import React, { useRef } from 'react'

export default function CambioColorFondo() {
    const divRef = useRef(null)
    const handleClick = () => {
        const divElement = divRef.current

        divElement.style.backgroundColor = getRandomColor();
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    };

    return (
        <>
            <div ref={divRef} style={{ width: '200px', height: '200px', border: '1px solid black' }}>
            </div>
            <button onClick={handleClick}>Change Background Color</button>
        </>
    )
}



// En este Ejercicio, useRef se utiliza para crear una referencia(divRef) al elemento div del DOM.Cuando el botón se hace clic, la función cambiarColorFondo se ejecuta y accede al elemento del DOM mediante la propiedad current de divRef.Luego, cambia el color de fondo del elemento div utilizando style.backgroundColor.

// Recuerda que este enfoque modifica directamente el DOM, y en aplicaciones más grandes, es posible que desees considerar el uso de estados y actualizaciones de estado para manejar cambios en la interfaz de usuario de una manera más controlada.
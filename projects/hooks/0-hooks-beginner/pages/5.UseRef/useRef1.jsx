import React, { useState, useEffect, useRef } from "react";

export default function ContadorSinRerender() {
    const [name, setName] = useState('')
    const renderCount = useRef(0)

    useEffect(() => {
        const intervalId = setInterval(() => {

            renderCount.current = renderCount.current + 1
        }, 1000);

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <h1>Contador sin-rerenderizacion</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
        </>
    )
}


// En este ejercicio, useRef se utiliza para almacenar el valor del contador(contadorRef.current) sin provocar re - renders cuando cambia.La función useEffect se encarga de iniciar un intervalo que incrementa el contador cada segundo.La actualización del contador se realiza modificando la propiedad current de contadorRef.La función de retorno de useEffect limpia el intervalo cuando el componente se desmonta.

// Este enfoque permite que el contador se incremente sin causar re - renderizaciones adicionales en el componente.
import React, { useState, useRef } from 'react'
import { createRoot } from 'react-dom/client'


export default function Demo() {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)


    const handleIncrement = () => {
        setCount(count + 1)
        countRef.current++;

        console.log('State: ', count)
        console.log('Ref: ', countRef.current)
    }

    return (
        <div>
            Count: {count}
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}


const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< Demo />)


/*
El motivo por el que el console.log de State devuelve 0 y el de Ref devuelve 1 es porque useState es asincrónico, mientras que useRef no lo es.

Cuando actualizas el estado con setCount(count + 1), React no actualiza inmediatamente el valor de count. En cambio, programa la actualización del estado para después de que termine el renderizado del componente. Por lo tanto, el valor de count en el siguiente renderizado del componente será el nuevo valor después de la actualización.

Por otro lado, cuando actualizas el ref con countRef.current++, estás actualizando directamente el valor de countRef.current. No hay asincronía involucrada aquí, por lo que el valor se incrementa de inmediato.

En resumen, al momento de imprimir los valores en el console.log, el valor de count reflejará el valor anterior a la actualización del estado, mientras que el valor de countRef.current reflejará el valor actualizado, ya que se incrementa de inmediato sin esperar a que se complete el renderizado del componente.
*/
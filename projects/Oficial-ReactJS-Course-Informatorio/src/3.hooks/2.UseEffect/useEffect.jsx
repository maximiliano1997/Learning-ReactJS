import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'


export default function Effect() {
    const [state, setState] = useState(true)
    const text = "Hello World!!"

    useEffect(() => {
        console.log('Cada vea que se renderice el componente, se ejecutara este useEffect')

        // document.write(text)

    })

    return (
        <center>
            {state && <p>{text}</p>}
            <button onClick={() => setState(!state)} className="bg-blue-500 p-2 m-5 rounded">Change</button>
        </center>
    )
}









const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< Effect />)

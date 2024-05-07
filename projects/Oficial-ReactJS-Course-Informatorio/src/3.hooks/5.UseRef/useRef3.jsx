import React, { useEffect, useState, useRef } from 'react'
import { createRoot } from 'react-dom/client'


export default function AutoFocus() {
    const [name, setName] = useState('lola')
    const atFocus = useRef()

    function focus() {
        atFocus.current.focus()
    }

    return (
        <>
            <div>
                <input type="text" value={name} ref={atFocus} onChange={(event) => setName(event.target.value)} />
                <p>{name}</p>
                <button onClick={focus}>button</button>
            </div>
        </>
    )
}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< AutoFocus />)

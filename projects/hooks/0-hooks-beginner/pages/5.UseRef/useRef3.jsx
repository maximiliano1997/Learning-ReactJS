import React, { useState, useRef } from 'react';

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
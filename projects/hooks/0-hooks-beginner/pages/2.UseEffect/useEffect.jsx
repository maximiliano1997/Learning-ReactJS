import React, { useState, useEffect } from 'react';



export default function Effect() {

    const [state, setState] = useState(true)
    const text = 'Hello World!!'

    useEffect(() => {
        console.log('Cada vez que se renderice el componenete, se ejecutara este useEffect')
        // return text = 'Hola Mundo!';
    })

    return (
        <center>
            <p>
                {state && <p>{text}</p>}
                <button onClick={() => setState(!state)}>Selects</button>
            </p>
        </center>
    )
}
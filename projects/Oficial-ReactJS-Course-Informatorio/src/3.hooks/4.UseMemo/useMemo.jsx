import React, { useState, useMemo, useEffect } from 'react'
import { createRoot } from 'react-dom/client'


export default function UseMemo() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log('Theme Changed')
    }, [themeStyles])

    return (
        <center>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </center>
    )
}

function slowFunction(num) {
    console.log('Calling Slow Function')
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2
}


const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< UseMemo />)

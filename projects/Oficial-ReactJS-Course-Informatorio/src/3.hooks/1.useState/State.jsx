import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    color: 'blue'
}


export default function State() {
    const [string, setString] = useState('Hello World!')
    const [number, setNumber] = useState(5)
    const [array, setArray] = useState(['Imanol', 27])
    const [object, setObject] = useState({ nombre: 'Imanol', apellido: 'Aguer' })

    return (
        <center>
            <div>
                <h3>States waiting to be Changed: </h3>
                String: <p>{string}</p>
                <hr />
                Number: <p>{number}</p>
                <hr />
                Array: <p>{array.join(', ')}</p>
                <hr />
                Object: <p>{JSON.stringify(object)}</p>

            </div>

            <div style={styles}>
                <h3>Changer States Buttons: </h3>
                <button onClick={() => setString('Goodbye World!')}>Change String State</button>
                <button onClick={() => setNumber(50 + 55)}>Change Number State</button>
                <button onClick={() => setArray((...prevArr) => ['Imanol', 'Aguer', 27, prevArr])}>Change Array State</button>
                <button onClick={() => setObject((prevObj) => ({ ...prevObj, dni: '40034748' }))}>Change Object State</button>
            </div>
        </center>
    )
}






const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<State />)
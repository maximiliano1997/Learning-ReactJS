import React, { useState } from 'react';

const styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
}


export default function State() {
    const [string, setString] = useState('Hello World!')
    const [number, setNumber] = useState(5)
    const [array, setArray] = useState(['Imanol', 27])
    const [object, setObject] = useState({ nombre: 'Imanol', apellido: 'Aguer' })

    return (
        <center>

            <div>
                <h3>States waiting to be changed:</h3>
                String: <p>{string}</p><br />
                Number: <p>{number}</p><br />
                Array: <p>{array.join(', ')}</p><br />
                Object: <p>{JSON.stringify(object)}</p><br />
                {/* String: <p>{state}</p><br /> */}
            </div>

            <div style={styles}>
                <h3>Changer States Buttons: </h3>
                <button onClick={() => setString('Goodbye World!')}>Change String State</button>
                <button onClick={() => setNumber(50 + 55)}>Change Number State</button>
                <button onClick={() => setArray((...prevArr) => ['Imanol', 'Aguer', 27])}>Change Array State</button>
                <button onClick={() => setObject((prevObj) => ({ ...prevObj, dni: '40034748' }))}>Change Object State</button>
            </div>

        </center >
    )
}
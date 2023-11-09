import { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom'

function Normal() {
    const [contador, setContador] = useState(0);
    return (
        <div>
            <button onClick={() => setContador(contador + 1)}>Increment</button>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador - 1)}>Decrement</button>
        </div>
    )
}

function Potenciador() {
    const [contador, setContador] = useState(0);

    function startPotenciador() {
        setContador(1)
    }

    useEffect(() => (
        startPotenciador()
    ), [])

    return (
        <div>
            <button onClick={() => setContador(contador * 2)}>Increment x2</button>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(1)}>Restart</button>
        </div>
    )
}

export default function Intro() {
    const [normal, setNormal] = useState(true);
    const [potenciador, setPotenciador] = useState(false);

    const toPotenciador = () => {
        if (normal == true) {
            setPotenciador(true)
            setNormal(false)
        }
    }
    const toNormal = () => {
        setNormal(true)
        setPotenciador(false)
    }


    return (
        <div id="ux">
            <div>
                <p>UX</p>
                <button onClick={toPotenciador}>x2 Mode</button>
                <button style={{ marginLeft: '20px' }} onClick={toNormal}>Normal Mode</button>
            </div>
            {normal && <Normal />}
            {potenciador && <Potenciador />}
        </div>
    )
}
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

function FormularioAdd({ setLista, lista }) {
    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
        const nuevaAnotacion = { id: '', titulo: e.target[0].value, contenido: e.target[1].value }
        setLista([...lista, nuevaAnotacion])
    }
    return (
        <div style={{ margin: '20px' }}>
            <form action="" onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'column' }}>
                Titulo: <input type="text" />
                Contenido: <input type="text" />
                <button>Agregar</button>
            </form>
        </div>
    )
}

function ListaRender({ lista }) {
    return (
        <div>
            {lista.map(anotacion => {
                return (
                    <div key={anotacion.id} style={{ border: '10px solid white' }}>
                        <h4>{anotacion.titulo}</h4>
                        <p>{anotacion.contenido}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default function ListaDeAnotaciones() {
    let list = [
        { id: '', titulo: 'Shrek', contenido: 'burro' },
        { id: '', titulo: 'Shrek', contenido: 'burro' },
    ]

    const [lista, setLista] = useState(list)

    return (
        <div>
            <ListaRender lista={lista} />
            <FormularioAdd setLista={setLista} lista={lista} />
        </div>
    )
}





const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<ListaDeAnotaciones />)
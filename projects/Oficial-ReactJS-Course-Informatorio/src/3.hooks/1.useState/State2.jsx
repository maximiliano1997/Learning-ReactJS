import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'


export default function FormularioUsuario({ datoAleatorio }) {
    const [usuario, setUsuario] = useState({ nombre: '', edad: '' });
    console.log(datoAleatorio)

    const handleInputChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        setUsuario({ ...usuario, [name]: value })
        console.log(event)
    }

    return (
        <div>
            <h2>Formulario de Usuario</h2>
            <form action="">
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        name='nombre'
                        value={usuario.nombre}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="edad">Edad:</label>
                    <input
                        type="number"
                        name='edad'
                        value={usuario.edad}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <div>
                <h3>Informacion del Usuario:</h3>
                <p>Nombre: {usuario.nombre}</p>
                <p>Edad: {usuario.edad}</p>
            </div>
        </div>
    )
}

const datoAleatorio = { dato: 'Dato Aleatorio!' }

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<FormularioUsuario datoAleatorio={datoAleatorio} />)
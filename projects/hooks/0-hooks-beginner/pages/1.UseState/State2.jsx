import { useState } from 'react'

export default function FormulariUsuario() {
    const [usuario, setUsuario] = useState({ nombre: '', edad: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
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
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="edad">Edad: </label>
                    <input
                        type="number"
                        name='edades'
                        value={usuario.edad}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <div>
                <h3>Informacion del usuario</h3>
                <p>Nombre: {usuario.nombre}</p>
                <p>Edad: {usuario.edad}</p>
            </div>
        </div>
    )
};
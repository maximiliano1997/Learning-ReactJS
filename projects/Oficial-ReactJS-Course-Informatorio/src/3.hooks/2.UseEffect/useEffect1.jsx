import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { DiVim } from 'react-icons/di'

export default function Tareas() {

    const [tareas, setTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState('')

    const [error, setError] = useState('')

    useEffect(() => {
        const tareasGuardadas = localStorage.getItem('tareas');

        if (tareasGuardadas) {
            setTareas(JSON.parse(tareasGuardadas))
        }
    }, [])


    const agregarTarea = () => {
        if (nuevaTarea == '') {
            setError('El campo de entrada no puede estar vacio.')
            return;
        }

        if (tareas.includes(nuevaTarea)) {
            setError('La tarea ya existe en la lista.');
            return;
        }

        const nuevasTareas = [...tareas, nuevaTarea]
        setTareas(nuevasTareas);
        setNuevaTarea('');
        guardarTareasEnLocalStorage(nuevasTareas)
        setError('')
    }
    const eliminarTarea = (index) => {
        const tareasRestantes = tareas.filter((_, i) => i !== index);
        setTareas(tareasRestantes);
        guardarTareasEnLocalStorage(tareasRestantes)
    }

    const guardarTareasEnLocalStorage = (tareas) => {
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }


    return (
        <center>

            <div>
                <h2>Lista de Tareas</h2>
                {error && <p className='error-message'>{error}</p>}
                <div>
                    <input
                        type="text"
                        value={nuevaTarea}
                        onChange={(e) => setNuevaTarea(e.target.value)}
                        placeholder='Agregar nueva tarea' />
                    <button onClick={agregarTarea}>Agregar</button>
                </div >
                <ul>
                    {tareas.map((tarea, index) => (
                        <li key={index}>
                            {tarea}
                            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </center>
    )
}





const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< Tareas />)

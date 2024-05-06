import React, { useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'

export default function ListaTareas() {
    const [tasks, setTasks] = useState([
        { id: 1, description: 'Lavar la Ropa Sucia', completed: false },
        { id: 2, description: 'Ir al Gym', completed: true },
    ])
    const [filter, setFilter] = useState('all')

    const filteredTasks = useMemo(() => {
        switch (filter) {
            case 'completed':
                return tasks.filter(tasks => tasks.completed);
            case 'pending':
                return tasks.filter(tasks => !tasks.completed);
            default:
                return tasks;
        }
    }, [tasks, filter]);


    const handleToggleCompletion = (taskId) => {
        setTasks(prevTasks => prevTasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task)
        )
    }
    console.log(tasks)

    return (
        <>
            <div>
                {filteredTasks.map(task => (
                    <div key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleCompletion(task.id)}
                        />
                        <span>{task.description}</span>
                    </div>
                ))}
            </div>
            <div className='flex gap-10'>
                <button onClick={() => setFilter('all')}>Mostrar Todas</button>
                <button onClick={() => setFilter('completed')}>Mostrar Completadas</button>
                <button onClick={() => setFilter('pending')}>Mostrar Pendientes</button>
            </div>
        </>
    )

}



// Crear componente
// crear un useState con un objeto donde esta el id, tarea y la condicion de esa tarea
// creamos un useState para el el string que manejara los filtros en nuestra funcion con switch a continuacion
// crear una funcion con useMemo donde con un switch manejamos los filtros y sus returns segun los casos
//crea una funcion handler para cambiar cambiar la condicion de las tareas de completado a pendiente (usando el id)
// y por ultimo el return donde mapeamos la funcion con el switch y sus returns que nos dara la lista de tareas segun el tipo de filtro.


const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< ListaTareas />)

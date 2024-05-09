import react, { useContext } from 'react'
import { personaContext } from './Context'

const Home = () => {
    const { persona, setPersona, edadIncrement } = useContext(personaContext)


    // ves, la funcion changeName queda en Home pero trabaja con el setteador 'setPersona' que esta disponible en el context 'personaContext'
    function changeName() {
        setPersona((prev) => ({ ...prev, nombre: 'Alejandro' }))
    }
    return (
        <>
            <div>Home {persona.nombre}</div>
            <button onClick={edadIncrement}>Incrementa Edad</button>
            <button onClick={changeName}>Cambiar Nombre</button>
        </>
    )
}

export default Home 
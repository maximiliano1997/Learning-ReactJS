import { usePersonaContext } from './Context'
import Form from './Form'
const Home = () => {

    const { persona, setPersona, edadIncrement } = usePersonaContext()

    // ves, la funcion changeName queda en Home pero trabaja con el setteador 'setPersona' que esta disponible en el context 'personaContext'
    function changeName() {
        setPersona((prev) => ({ ...prev, nombre: 'Alejandro' }))
    }
    return (
        <>
            <div className='text-green-500 text-[25px]'>Home {persona.nombre}</div>
            <button onClick={edadIncrement}>Incrementa Edad</button>
            <button onClick={changeName}>Cambiar Nombre</button>
            <br />
            <br />
            <Form />
        </>
    )
}

export default Home 
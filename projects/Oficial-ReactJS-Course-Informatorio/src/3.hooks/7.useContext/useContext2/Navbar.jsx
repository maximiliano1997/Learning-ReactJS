import react, { useContext } from 'react'
import { personaContext } from './Context'

const Navbar = () => {
    const { persona } = useContext(personaContext)
    return (
        <div>Navbar {persona.edad}</div>
    )
}

export default Navbar
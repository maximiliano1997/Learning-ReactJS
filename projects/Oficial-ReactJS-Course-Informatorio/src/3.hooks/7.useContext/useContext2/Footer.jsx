import react, { useContext } from 'react'
import { personaContext } from './Context'


const Footer = () => {
    const { persona } = useContext(personaContext)
    return (
        <div>Footer {persona.edad}</div>
    )
}


export default Footer;
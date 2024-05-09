import { usePersonaContext } from './Context'


const Footer = () => {
    const { persona } = usePersonaContext()
    return (
        <div className='text-yellow-500 text-[25px]'>Footer {persona.edad}</div>
    )
}


export default Footer;
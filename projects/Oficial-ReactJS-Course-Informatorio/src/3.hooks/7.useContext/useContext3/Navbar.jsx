import { usePersonaContext } from './Context'


const Navbar = () => {
    const { persona } = usePersonaContext()
    return (
        <div className='text-red-500 text-[25px]'>Navbar {persona.edad}</div>
    )
}

export default Navbar
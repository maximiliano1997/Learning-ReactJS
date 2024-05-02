import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'


function DeployCharacters({ data }) {

    return (
        <>
            {data.map(cha => {
                const { id, image, name, gender, status, species } = cha
                return (

                    <div key={id} className="w-[400px] bg-black border-2 border-teal-500 p-5 m-5 flex-column space-y-1 rounded-xl">
                        <div className="rounded">
                            <img src={image} alt="" className="rounded" />
                        </div>
                        <div className="bg-black text-white font-bold rounded-xl flex-column align-center">
                            <div className="w-[200px] space-y-2">
                                <h1 className="text-lg">{name}</h1>
                                <div>
                                    <p>Genero: <span className={gender == 'Male' ? 'text-blue-500' : 'text-pink-500'}>{gender}</span></p>
                                </div>
                                <div className="flex">
                                    <p>Especie: {species}</p> | <p>Estado: <span className={status == 'Alive' ? 'text-blue-500' : 'text-red-500'}>{status}</span></p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="bg-black text-white font-bold rounded-xl">

                        </div>
                        <button
                            className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                        >
                            Ver Personaje
                        </button>
                    </div>

                )
            })}
        </>
    )
}



export default function DataFetch() {
    const [status, setStatus] = useState({
        isLoading: true, error: '', characters: []
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character')

                const data = await response.json()

                if (data.error) {
                    throw new Error('Error cargando datos....')
                }
                setStatus({ isLoading: false, error: '', characters: data.results })
                console.log(status['characters'])
            } catch (error) {

                setStatus({ isLoading: false, error: error, characters: [] })
                console.error(status['error'])
            }
        }

        fetchData()
    }, [])

    return (
        <center>
            <DeployCharacters data={status.characters} />
        </center>
    )




}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< DataFetch />)

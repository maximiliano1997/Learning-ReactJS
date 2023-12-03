import React, { useState, useEffect } from 'react';


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
    const [charactersData, setCharactersData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');

                const data = await response.json();

                if (data.error) {
                    throw new Error('Error cargando datos');
                }
                setIsLoading(false)
                setCharactersData(data.results)
                console.log(charactersData)
            } catch (error) {
                console.error(error);
                setCharactersData([])
                setError(true)
            }
        }

        fetchData()
    }, [])

    // const { image } = charactersData

    // Early returns

    if (isLoading) {
        return (
            <center>
                <div>
                    <h1>Cargando contenido....espere por favor!</h1>
                </div>
            </center>
        )
    }

    if (error) {

        return (
            <center>
                <h1>ERROR 404</h1>
            </center>
        )
    }

    return (
        <center>
            <DeployCharacters data={charactersData} />
        </center>
    )
}


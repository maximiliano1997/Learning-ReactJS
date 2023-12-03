import React, { useState, useEffect } from 'react';


const useCharactersData = (url = 'https://rickandmortyapi.com/api/character') => {

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const fetchCharacters = (url) => {
        return fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Error en la base de datos')
                }
                return res.json();
            })
            .then((data) => {
                setIsLoading(false);
                setError('');
                setCharacters(data.results);
                setInfo(data.info);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            });
    }

    console.log(info)

    useEffect(() => {
        fetchCharacters(url);
    }, [url])



    function handlePrev() {
        fetchCharacters(info.prev)
        counter = counter - 1;
    }

    function handleNext() {
        fetchCharacters(info.next)

    }




    return { characters, info, error, isLoading, handlePrev, handleNext };
};

export default function DataFetchTwo() {
    const { characters, info, error, isLoading, handlePrev, handleNext } = useCharactersData('https://rickandmortyapi.com/api/character')

    console.log(characters)
    console.log('this is de next')
    console.log(info.next)




    return (
        <center>
            <div className="flex justify-center font-semibold gap-10 sticky">
                <button onClick={handlePrev} className="bg-red-500 w-[150px] h-10 hover:bg-red-700" >
                    Pag. Anterior
                </button>
                {/* <div>{counter}</div> */}
                <button onClick={handleNext} className="bg-green-500 w-[150px] h-10 hover:bg-green-700" >
                    Pag. Siguiente
                </button>
            </div>
            {
                characters.map(cha => {
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
                })
            }
        </center >
    )
}
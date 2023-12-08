import React, { useState, useEffect, useReducer } from 'react';

const ACTIONS = {
    START: 'fetch_start',
    SUCCESS: 'fetch_success',
    FAILED: 'fetch_failed'
}

const INITIAL_STATE = {
    characters: ['cacheadorTest'],
    info: {},
    error: "",
    isLoading: false
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.START:
            console.log('hola')
            return { ...state, isLoading: true }
        case ACTIONS.SUCCESS:
            console.log('Exito del Fetch')
            return { ...state, isLoading: false, characters: action.payload.charC, info: action.payload.infoD }
        case ACTIONS.FAILED:
            console.log('App > Error del Fetch')
            return { ...state, error: true, isLoading: false }
    }
}


const useCharactersData = (url = 'https://rickandmortyapi.com/api/character') => {

    // const [characters, setCharacters] = useState([]);
    // const [info, setInfo] = useState({});
    // const [error, setError] = useState('');
    // const [isLoading, setIsLoading] = useState(true);

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const fetchCharacters = (url) => {
        return fetch(url)
            .then((res) => {
                dispatch({ type: ACTIONS.START })
                if (!res.ok) {
                    throw new Error('Error en la base de datos')
                }
                return res.json();
            })
            .then((data) => {
                console.log(data.info)

                // Este es nuestro interval con el dispatch de datos y success!
                const myInterval = setInterval(() => {
                    dispatch({ type: ACTIONS.SUCCESS, payload: { infoD: data.info, charC: data.results } })
                }, 1000)

                setTimeout(() => {
                    clearInterval(myInterval);
                }, 1400)

                // Este otro es el dispatch simple sin intervalos de tiempo
                // dispatch({ type: ACTIONS.SUCCESS, payload: { infoD: data.info, charC: data.results } })
            })
            .catch((err) => {
                dispatch({ type: ACTIONS.FAILED, payload: { err: err.message } })
            });
    }

    console.log(state.info)

    useEffect(() => {
        fetchCharacters(url);
    }, [url])



    function handlePrev() {
        fetchCharacters(state.info.prev)
    }

    function handleNext() {
        fetchCharacters(state.info.next)

    }

    console.log(state.characters)


    return { characters: state.characters, info: state.info, error: state.error, isLoading: state.isLoading, handlePrev, handleNext };
};

function RenderFetch() {
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

function Loading() {

    return (
        <center>
            <div class="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">LOADING Characters</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 opacity-20">localhost Reducer Fetching</p>
                <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </center >
    )
}

function Error() {

    return (
        <center>
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Holy smokes!</strong>
                <span class="block sm:inline">Something seriously bad happened.</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
            Error 404
        </center>
    )
}


export default function ReducerTwo() {
    const { isLoading, error } = useCharactersData()
    return (
        <>
            {isLoading ? <Loading /> : error ? <Error /> : <RenderFetch />}
            {/* {error ? 'Error 404' : ''} */}
        </>
    )
}
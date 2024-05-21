import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="characters" element={<CharacterList />} />
                    <Route path="characters/:name" element={<Character />} />
                    <Route path="episodes" element={<EpisodesList />} />
                    <Route path="location" element={<LocationList />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/characters">Characters</Link>
                    </li>
                    <li>
                        <Link to="/location">Locations</Link>
                    </li>
                    <li>
                        <Link to="/episodes">Episodes</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />

            <footer>Este es el Footer</footer>
        </div>
    )
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

function CharacterList() {
    const [characters, setCharacters] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setIsLoading(true);
                setError('')
                setCharacters([])

                const response = await fetch('https://rickandmortyapi.com/api/character/')

                const data = await response.json()

                if (data.error) {
                    throw new Error('Error cargando los datos!')
                }

                setIsLoading(false)
                setError('')
                setCharacters(data.results)
            } catch (error) {
                console.error(error)
                setIsLoading(false)
                setError('Error...')
                setCharacters([])
            }
        };
        fetchCharacters();
    }, [])

    // early returns
    if (isLoading) {
        return <h1>Loading characters</h1>
    }

    if (error) {
        console.log(error)
        return <h1>{error}</h1>
    }

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <div>
                {characters.map((character) => (
                    <div key={character.id}>
                        <h2>{character.name}</h2>
                        <img src={character.image} alt={character.name} style={{ maxWidth: '100px' }} />
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                        <Link to={`/characters/${character.name}`}>Ver en Detalle</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Character = () => {
    const { name } = useParams();

    return <h1>Hola! {name}</h1>
}

function EpisodesList() {
    return (
        <div>
            <h2>EpisodesList</h2>
        </div>
    );
}

function LocationList() {
    return (
        <div>
            <h2>LocationList</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>404!</h2>
            <p>
                <Link to='/' >Go to home page!</Link>
            </p>
        </div>
    )
}

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<App />)
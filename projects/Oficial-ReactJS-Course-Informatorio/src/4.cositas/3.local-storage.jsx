import { useEffect, useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, Navigate, useNavigate, useLocation } from 'react-router-dom';


const AuthContext = createContext(null)

function App() {
    const [user, setUser] = useState({
        name: '',
    })

    const handleLogin = (username) => {
        setUser({ name: username })
        localStorage.setItem('user', JSON.stringify({ name: username }))
    }

    const handleLogout = () => {
        setUser({ name: '' })
        localStorage.removeItem('user')
    }

    const value = {
        user,
        handleLogin,
        handleLogout
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
            console.log('el localStorage, lo tiene')
        }
    }, [])


    return (
        <AuthContext.Provider value={value}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="characters"
                            element={
                                <ProtectedRoute>
                                    <CharacterList />
                                </ProtectedRoute>
                            } />
                        <Route path="characters/:name" element={<Character />} />
                        <Route path="episodes" element={<EpisodesList />} />
                        <Route path="locations" element={<LocationList />} />
                        <Route path="login" element={<Login />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext)
    const currentLocation = useLocation()
    console.log(currentLocation)
    if (!user.name) {
        return <Navigate to='/login' state={{ from: currentLocation }} replace />
    }

    return children;
}


function Login() {
    const [name, setName] = useState('')
    const { handleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || '/';
    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => {
                handleLogin(name)
                navigate(from, { replace: true })
            }}>Login</button>
        </>
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
                        <Link to="/locations">Locations</Link>
                    </li>
                    <li>
                        <Link to="/episodes">Episodes</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />

            <footer>Hola soy un footer</footer>
        </div>
    );
}

function Home() {
    const { handleLogout, user } = useContext(AuthContext)

    return (
        <div>
            <h2>Home</h2>
            {user.name ? (<button onClick={handleLogout}>Logout</button>)
                : (<Link to='/login'>Login</Link>)

            }
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
    const location = useLocation()
    return (
        <div>
            <h2>LocationList</h2>
            <Link to="/login" state={{ from: location }}>Login</Link>

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

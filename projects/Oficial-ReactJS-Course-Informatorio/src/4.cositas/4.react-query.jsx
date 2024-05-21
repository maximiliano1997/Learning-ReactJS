import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='characters' element={<CharacterList />} />
                        <Route path='*' element={<NoMatch />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

const getCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const json = await res.json()

    if (json.error) {
        throw new Error(json.error)
    }

    return json.results;
}

const CharacterList = () => {
    const query = useQuery({
        queryKey: ['characters'],
        queryFn: getCharacters,
    });

    if (query.status === 'pending') {
        return <h1>Loading...... </h1>
    }

    console.log("Query", query)

    console.log("Query Details:", {
        queryKey: query.queryKey,
        status: query.status,
        data: query.data,
        error: query.error
    });

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <ul>
                {query.data?.map((characters) => (
                    <li key={characters.id} >{characters.name}</li>
                ))}
            </ul>
        </div>
    )
}


function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/characters'>Characters</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />

            <footer>Este es un Footer.....</footer>
        </div >
    )
}


function NoMatch() {
    return (
        <div>
            <h2>404!</h2>
            <p>
                <Link to='/' >Go to the home page.</Link>
            </p>
        </div>
    )
}


const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App />);

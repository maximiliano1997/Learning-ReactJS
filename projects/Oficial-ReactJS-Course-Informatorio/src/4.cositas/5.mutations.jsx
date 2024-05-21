import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {
    useMutation,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='login' element={<Login />} />
                        <Route path='*' element={<NoMatch />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
} f

const loginMutation = async ({ email, password }) => {
    const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
    }

    return response.json();
}

const Login = () => {
    const mutation = useMutation({
        mutationFn: loginMutation,
        onSuccess: (data) => {
            console.log('Login Exitoso', data)
        },
        onError: (error) => {
            console.log('Algo salio mal', error.message)
        },
    })

    console.log(mutation.status, '<--- mutation.status')


    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <ul>
                <button onClick={() => {
                    mutation.mutate({
                        email: 'john@mail.com',
                        password: 'changeme',
                    })
                }}>
                    Login mutate
                </button>
            </ul>
        </div>
    )
}

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

            <hr />

            <Outlet />

            <footer>Hola Soy un footer jeje</footer>
        </div>
    )
}

function NoMatch() {
    return (
        <div>
            <h2>404!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    )
}




const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App />);

import React, { useState, createContext, StrictMode, useContext } from 'react';
import { createRoot } from 'react-dom/client';


// Prop drilling
// Component Composition
// React Context

// Ejercicio:
// Sobre el ejercicio de react-router:
// Crear un context AuthContext (user, login, logout)
// Creat un hook que se llame useAuth que retorne el context

const UserContext = createContext()

function App() {
    const [user, setUser] = useState({
        name: ''
    })

    const handleLogin = (name) => {
        setUser({ name })
    }

    const value = {
        user,
        handleLogin,
    }

    return (
        <UserContext.Provider value={value}>
            <NavBar />
            {user.name ? <Home /> : <Login />}
            <Footer />
        </UserContext.Provider >
    )
}


function Login() {
    const [name, setName] = useState('')
    const { handleLogin } = useContext(UserContext)

    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => handleLogin(name)}>Login</button>
        </>
    )
}

function NavBar() {
    return <p>navbar</p>
}

function Home() {
    return <Dashboard />
}

function Dashboard() {
    return (
        <>
            <p>Dashboard</p>
            <UserInfo />
        </>
    )
}

function UserInfo() {
    const { user } = useContext(UserContext)

    return (
        <>
            <p>User info: </p>
            <p>Bienvenido {user.name}</p>
        </>
    )
}

function Footer() {
    return <p>footer</p>
}

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
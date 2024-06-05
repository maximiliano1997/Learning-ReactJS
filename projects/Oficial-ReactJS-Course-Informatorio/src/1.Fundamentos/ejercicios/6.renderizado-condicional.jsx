import React from 'react'
import { createRoot } from 'react-dom/client'

const usuario = {
    name: 'Imanol',
    age: 27,
    logged: true,
    followers: [],
};

function Home() {
    if (!usuario.logged) {
        return <button>Iniciar Sesion</button>
    }

    return (
        <div>
            <h1>Bienvenido {usuario.name}</h1>
            <p>Esta es la home. Hay informacion privada y solo los usuario loggeados pueden verla</p>
            {usuario.age >= 18 ? <p>Sos mayor de edad</p> : <p>Sos menor de dad</p>}
        </div>
    );
}

console.log(usuario.age > 18 && 'Hola')

// condicion ? resultadoCondicionTrue : resultadoCondicionFalse



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<Home />);
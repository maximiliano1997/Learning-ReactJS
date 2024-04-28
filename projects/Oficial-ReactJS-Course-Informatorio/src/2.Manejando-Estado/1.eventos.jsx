import React from 'react';
import { createRoot } from 'react-dom/client';
import { imprimirPorConsola, imprimirPorConsolaConParametro } from '../utils/index'

const usuario = {
    name: 'Imanol',
    age: 27,
    logged: true,
    followers: [],
};

function Home() {
    if (!usuario.logged | usuario.age < 18) {
        return <button>Iniciar sesion</button>
    }

    return (
        <div>
            <h1>Bievenido</h1>
            <p>
                Esta es la home. Hay informacion privada y solo los usuairos loggeados pueden verla.
            </p>
            {usuario.age >= 18 ? <p>Sos Mayor de dad</p> : <p>Sos menor de dad</p>}
            <button onClick={imprimirPorConsola}>Haceme click</button>
            <button onClick={() => imprimirPorConsolaConParametro('Imanol')}>Haceme click</button>
        </div>
    );
}

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<Home />);
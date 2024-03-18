import React from 'react';
import { createRoot } from 'react-dom/client';

const usuario = {
    name: 'Ima',
    age: 27,
    logged: true,
    followers: [],
}

export default function Home() {

    if (!usuario.logged) {
        return <button>Iniciar sesion</button>
    } else {
        return (
            <div>
                <h1>Bienvenido!</h1>´
                <p>
                    Esta es la home. Hay informacion privada y solo los usuairo loggeados pueden verla.....
                </p>
                {usuario.logged ? <p>Hola sr.{usuario.name}</p> : <p></p>}
                {usuario.age >= 18 ? <p>Sos mayor de edad.</p> : <p>Sos menor de edad.</p>}
            </div>
        );
    }

    console.log(usuario.age > 18 && 'Holas');

}

const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<Home />)
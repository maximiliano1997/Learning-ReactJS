import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'


// Forms
// Data binding
// Uncontrolled inputs
// Controlled inputs

function Home() {
    const [searchValue, setSearchValue] = useState('Harry Potter');

    function handleSubmit(event) {
        event.preventDefault()

        console.log('Enviar', searchValue);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value)
                    }}
                    type="text"
                    placeholder='Ingrese su pelicula.'
                />
                <button>Buscar pelicula</button>
            </form>
            <button>Estas buscando por: {searchValue} </button>
        </div>
    )


}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<Home />);
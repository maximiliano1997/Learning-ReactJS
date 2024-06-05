import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'

function SearchBar({ searchValue, setSearchValue }) {
    function handleSearch(event) {
        event.preventDefault();
        console.log(event)
        // Es un ejemplo, en realidad no queremos buscar nada :D

    }

    return (
        <form action="" onSubmit={handleSearch}>
            <input
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                    console.log(event.target.elements)
                }}
                type="text" />
            <button>Buscar</button>
        </form>
    );
}

function Results({ searchValue }) {
    return <p>Estas buscando por: {searchValue}</p>
}

function Home() {
    const [searchValue, setSearchValue] = React.useState('')
    const [searchValue1, setSearchValue1] = React.useState('hole')
    const [searchValue2, setSearchValue2] = React.useState(8)

    return (
        <>
            <header>
                <SearchBar searchValue={searchValue1} setSearchValue={setSearchValue} />
            </header>
            <main>
                <Results searchValue={searchValue} />
            </main>
        </>
    );
}

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<Home />);

// https://www.youtube.com/watch?v=qdkW8VxCau0     <-- Video de ejemplo claritoo !!
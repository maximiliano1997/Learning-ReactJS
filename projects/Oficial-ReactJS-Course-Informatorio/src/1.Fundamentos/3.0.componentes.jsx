import React from 'react';
import { createRoot } from 'react-dom/client';

// Esto es un componente

function NavBar() {
    return (
        <nav id="main-nav">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/archives">Archivos</a>
                </li>
                <li>
                    <a href="/about">Nosotros</a>
                </li>
            </ul>
        </nav>
    );
}


const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<NavBar />)

// 1. Importamos las Dependencias
import React from 'react';
import { createRoot } from 'react-dom/client';

// 2. Creamos un elemento de React usando JSX
const elemento = (
    <nav id="main-nav">
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/archives">Archives</a>
            </li>
        </ul>
    </nav>
)


const container = document.querySelector('#app')
const root = createRoot(container)
root.render(elemento)
// 1. Importamos las Dependencias
import React from 'react';
import { createRoot } from 'react-dom/client';

// 2. Creamos un Elemento de React
const element = React.createElement('h1', { id: 'Titular' }, 'Bievenido!!!!!s')

// 3. Renderizamos la Aplicacion
const container = document.querySelector('#app')
const root = createRoot(container)
root.render(element)
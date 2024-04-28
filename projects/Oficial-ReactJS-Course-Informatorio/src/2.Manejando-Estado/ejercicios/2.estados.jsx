import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'


const COLORS = [
    'red',
    'blue',
    'orange',
    'green',
    'violet',
    'yellow',
    'brown',
    'skyblue',
];


function Home() {
    return <h1 style={{ color: COLORS[1] }}>Completar</h1>;
}

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<Home />);
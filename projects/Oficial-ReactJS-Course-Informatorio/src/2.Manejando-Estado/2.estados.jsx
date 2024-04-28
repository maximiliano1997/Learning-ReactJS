import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Home() {
    const [count, setCount] = useState(0);

    function handleSubtract() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function handleAdd() {
        const newCount = count + 2;
        setCount(newCount);
        console.log(newCount)
    }

    return (
        <div>
            <h1>Bienvenido!</h1>
            <button onClick={handleSubtract} >-</button>
            <p>{count}</p>
            <button onClick={handleAdd} >+</button>
        </div>
    )
}

const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<Home />);
import React, { useId } from 'react'
import { createRoot } from 'react-dom/client'


function PasswordField() {
    const id = useId()

    return (
        <>
            <label htmlFor={`password-input-${id}`}>
                Password:
                <input id={`password-input-${id}`} type="password" />
            </label>
        </>
    );
}

function Home() {
    return (
        <>
            <h2>Choose Password</h2>
            <PasswordField />
            <h2>Confirm Password</h2>
            <PasswordField />
        </>
    )
}






const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<Home />)
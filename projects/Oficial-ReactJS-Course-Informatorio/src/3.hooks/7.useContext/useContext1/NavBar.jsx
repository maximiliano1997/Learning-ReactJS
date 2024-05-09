import React, { useState, createContext, StrictMode, useContext } from 'react';
import { createRoot } from 'react-dom/client';

import NavLinks from './NavLinks'

export const NavbarContext = createContext()
// returns two components
// Provider - wrap return in Parent Component
// Consumer - replaced by useContext(hooks)

// custom hook
export const useAppContext = () => useContext(NavbarContext)



const NavBar = () => {
    const [user, setUser] = useState({ name: 'bob' })
    const logout = () => {
        setUser(null);
    }


    const value = {
        user,
        logout
    }

    return (
        <NavbarContext.Provider value={value}>
            <nav className='navbar'>
                <h5>CONTEXT API</h5>
                <NavLinks />
            </nav>
        </NavbarContext.Provider >
    )
}






const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<NavBar />)
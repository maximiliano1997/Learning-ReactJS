import React, { useState } from 'react'
import PersonasContextProvider from './Context'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'

function App() {

    return (
        <PersonasContextProvider>
            <Navbar />
            <Home />
            <Footer />
        </PersonasContextProvider >
    )


}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<App />)
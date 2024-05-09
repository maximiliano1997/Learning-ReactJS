import React, { createContext, useState } from 'react'

export const personaContext = createContext()


export default function PersonasContextProvider({ children }) {
    const [persona, setPersona] = useState({
        nombre: 'Imanol',
        edad: 27,
        pais: 'Argentina',
    })

    function edadIncrement() {
        setPersona(prev => ({ ...prev, edad: prev.edad + 1 }))
    }

    const value = {
        persona,
        setPersona,
        edadIncrement,
    }
    return (
        <personaContext.Provider value={value} >
            {children}
        </personaContext.Provider>
    )
}
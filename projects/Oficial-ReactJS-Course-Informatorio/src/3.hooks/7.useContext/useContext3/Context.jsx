import React, { createContext, useState, useContext } from 'react'

export const personaContext = createContext()


export default function PersonasContextProvider({ children }) {
    const [persona, setPersona] = useState({
        nombre: '?',
        correo: '?',
        dinero: 0,
        edad: 0,
        pais: '?',
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

export function usePersonaContext() {
    const context = useContext(personaContext)
    if (!context) {
        return 'No existe ningun contexto, revise problema'
    }
    console.log('utilizando customhooks')
    return context;
}
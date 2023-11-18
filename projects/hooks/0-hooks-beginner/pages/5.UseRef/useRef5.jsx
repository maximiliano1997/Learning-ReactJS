import React, { useEffect, useRef } from 'react';

const SeguimientoTamañoVentana = () => {
    const tamañoVentanaRef = useRef({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        const handleResize = () => {
            tamañoVentanaRef.current = { width: window.innerWidth, height: window.innerHeight }

            console.log(`Ancho: ${tamañoVentanaRef.current.width}, Alto: ${tamañoVentanaRef.current.height}`)
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <div>
            <h1>Seguimiento de Tamañp de Ventana</h1>
            <p>Ancho: {tamañoVentanaRef.current.width}, Alto: {tamañoVentanaRef.current.height}</p>
        </div>
    )
}

export default SeguimientoTamañoVentana;
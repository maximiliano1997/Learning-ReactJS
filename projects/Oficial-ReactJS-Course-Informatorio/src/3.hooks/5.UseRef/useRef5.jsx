import React, { useEffect, useState, useRef } from 'react'
import { createRoot } from 'react-dom/client'


const SeguimientoTamañoVentana = () => {
    const tamañoVentanaRef = useRef({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            tamañoVentanaRef.current = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };



        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [tamañoVentanaRef.current.width])

    useEffect(() => {
        const intervalId = setInterval(() => {

            console.log(`Ancho: ${tamañoVentanaRef.current.width}, Alto: ${tamañoVentanaRef.current.height}`)

        }, 1000)


        return () => clearInterval(intervalId)
    }, [])


    return (
        <div>
            <h1>Seguimiento de Tamañp de Ventana</h1>
            <p>Ancho: {tamañoVentanaRef.current.width}, Alto: {tamañoVentanaRef.current.height}</p>
        </div>
    )
}


const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< SeguimientoTamañoVentana />)
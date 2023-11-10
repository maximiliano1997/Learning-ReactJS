import React, { useState, useEffect } from 'react'




export default function Timer() {
    const [seconds, setSeconds] = useState(0)



    useEffect(() => {
        // let input = parseInt(prompt('Ingrese numero de capitalizacion'))
        const timer = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000)

        return () => {
            clearInterval(timer);
        };
    }, [])

    let color = 'gold'
    let background = 'magenta'


    if (seconds >= 10) {
        color = 'blue'
        background = 'white'
    }
    if (seconds >= 20) {
        color = 'red'
        background = 'orange'
    }
    if (seconds >= 30) {
        color = 'gold'
        background = 'black'
    }
    if (seconds >= 40) {
        color = 'black'
        background = 'yellow'
    }
    if (seconds >= 50) {
        color = 'magenta'
        background = 'skyblue'
    }


    return (
        <p style={{ color: `${color}`, backgroundColor: background }}>Tiempo transcurrido: {seconds}</p>
    )
}
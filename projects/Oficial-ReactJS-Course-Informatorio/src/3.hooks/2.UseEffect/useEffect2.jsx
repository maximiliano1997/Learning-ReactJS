import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'


export default function Timer() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000);


        return () => {
            clearInterval(timer);
        }
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

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< Timer />)

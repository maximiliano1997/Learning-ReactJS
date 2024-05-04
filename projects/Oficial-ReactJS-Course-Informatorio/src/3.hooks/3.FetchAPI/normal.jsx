import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

// const API_URL = 'https://api.frankfurter.app/latest'
// GET / latest HTTP / 1.1
// Host:
// Content - Type: application / json; charset = utf - 8
// Content- Length: null

const host = 'api.frankfurter.app'

export default function CurrencyConverter() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {
        fetch(`https://${host}/latest`)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                setError(error)
            })
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    }
    if (!data) {
        return <div>Cargando....</div>
    }

    console.log(data)
    console.log(data.rates)
    console.log(Object.entries(data.rates))

    return (
        <div>
            <h2>Tasa de cambio Euro </h2>
            <p>Amount: {data.amount}</p>
            <p>Base: {data.base}</p>
            <p>Date: {data.date}</p>
            <hr />
            <ul>
                {Object.entries(data.rates).map(([key, value]) => (
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <p>{key}: </p>  <p>${value}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}




const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< CurrencyConverter />)

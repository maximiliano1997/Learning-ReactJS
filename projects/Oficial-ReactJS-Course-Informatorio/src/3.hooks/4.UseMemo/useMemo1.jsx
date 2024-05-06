import React, { useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { DiVim } from 'react-icons/di';

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return num > 1;
}

const PrimeNumbersList = ({ limit }) => {
    const [maxNumber, setMaxNumber] = useState(limit)

    const primeNumbersList = useMemo(() => {
        const primes = [];
        for (let i = 2; i <= maxNumber; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    }, [maxNumber])


    return (
        <div>
            <h2>List of Prime Numbers up to {maxNumber}</h2>
            <p>Enter a number: <input type="number" value={maxNumber} onChange={(e) => setMaxNumber(e.target.value)} />
            </p>
            <ul>
                {primeNumbersList.map((prime) => (
                    <li key={prime}>{prime}</li>
                ))}
            </ul>
        </div>
    )
}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< PrimeNumbersList />)




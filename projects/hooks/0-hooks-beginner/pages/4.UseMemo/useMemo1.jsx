import React, { useState, useMemo } from 'react';

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return num > 1;
}

const PrimeNumbersList = ({ limit }) => {
    const [maxNumber, setMaxNumber] = useState(limit);

    const primeNumbersList = useMemo(() => {
        const primes = [];
        for (let i = 2; i <= maxNumber; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    }, [maxNumber]);

    return (
        <div>
            <h2>List of Prime Numbers up to {maxNumber}</h2>
            <p>Enter a number: <input type="number" value={maxNumber} onChange={(e) => setMaxNumber(parseInt(e.target.value))} />
            </p>
            <ul>
                {primeNumbersList.map((prime) => (
                    <li key={prime}>{prime}</li>
                ))}
            </ul>
        </div>
    )
}

export default PrimeNumbersList;



// Este componente PrimeNumbersList renderiza una lista de números primos hasta un límite específico. Utiliza useMemo para calcular y almacenar en caché los números primos, evitando recálculos innecesarios cuando el usuario cambia el límite. Además, incorpora un campo de entrada para permitir al usuario cambiar dinámicamente el límite de números primos que se mostrarán.
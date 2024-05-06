import React, { useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'


export default function FibonacciCalculator() {
    const [index, setIndex] = useState(0)

    const calculateFibonacci = useMemo(() => {
        const memo = {};

        console.log(memo)
        const fibonacci = (n) => {
            if (n <= 1) return n;

            if (memo[n]) {
                return memo[n]
            }

            memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
            return memo[n]
        }

        return fibonacci;
    }, [])

    const handleIndexChange = (e) => {
        const newIndex = parseInt(e.target.value, 10)
        setIndex(isNaN(newIndex) ? 0 : newIndex);
    };

    return (
        <>
            <h2>Fibonacci Calculator</h2>
            <form action="">
                <label htmlFor="">
                    Enter Index:
                    <input type="text" value={index} onChange={handleIndexChange} />
                </label>
                <p>Fibonacci Number at Index {index}: {calculateFibonacci(index)}</p>
            </form>
        </>
    )
}




const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< FibonacciCalculator />)


/*
Vamos a calcular los términos de la secuencia de Fibonacci para entender mejor cómo funciona. Cuando pasamos el índice 5 a la función Fibonacci, queremos calcular el quinto término de la secuencia. Aquí está la secuencia y cómo se calcula cada término:

F(0) = 0
F(1) = 1
F(2) = F(1) + F(0) = 1 + 0 = 1
F(3) = F(2) + F(1) = 1 + 1 = 2
F(4) = F(3) + F(2) = 2 + 1 = 3
F(5) = F(4) + F(3) = 3 + 2 = 5

Entonces, cuando pasamos el índice 5 a la función Fibonacci, el resultado debería ser 5, no 6. El quinto término de la secuencia de Fibonacci es 5, no 6. Cada término de la secuencia es la suma de los dos términos anteriores, por lo que el quinto término es la suma del tercer y cuarto término, que son 2 y 3, respectivamente, dando como resultado 5.
*/
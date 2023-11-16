import React, { useState, useMemo } from 'react';


export default function FibonacciCalculator() {
    const [index, setIndex] = useState(0);

    const calculateFibonacci = useMemo(() => {
        const memo = {};

        const fibonacci = (n) => {
            if (n <= 1) return n;

            if (memo[n]) {
                return memo[n];
            }

            memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
            return memo[n];
        };

        return fibonacci;
    }, []);

    const handleIndexChange = (e) => {
        const newIndex = parseInt(e.target.value, 10);
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
                <p>
                    Fibonacci Number at Index {index}: {calculateFibonacci(index)}
                </p>
            </form>
        </>
    )
}
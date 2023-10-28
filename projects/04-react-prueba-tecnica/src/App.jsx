import { useState, useEffect } from "react"

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data

                setFact(fact)

                const firsThreeWords = fact.split(' ').splice(0, 3).join(' ')
                console.log(firsThreeWords)
                setImageUrl(firsThreeWords)

                // fetch(`https://cataas.com/cat/says/${firsThreeWords}?fontSize=50&fontColor=red&json=true`)
                //     .then(res => res.json())
                //     .then(data => {
                //         const { url } = data
                //         setImageUrl(url)
                //         console.log
                //     })
            })
    }, [])
    console.log(fact)

    return (
        <main>
            <h1>Hola mundillo!!</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`https://cataas.com/cat/says/${imageUrl}?fontSize=50&fontColor=red`} alt='Image from fetch' />}
        </main>
    )
}


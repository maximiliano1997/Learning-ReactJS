const promise = fetch('https://rickandmortyapi.com/api')
    .then((res) => res.json())
    .then((data) => console.log('Datos obtenidos con then:', data))
    .catch((err) => console.log('Error con then/catch: ', err))

//////////////////////////////////////////////////////

async function peticion() {
    const res = await fetch('https://rickandmortyapi.com/api');
    const data = await res.json()
    console.log('peticion', data)
}


//////////////////////////////////////////////////////

async function tryPeticion() {
    try {
        const res = await fetch('https://rickandmortyapi.com/api');
        const data = await res.json();
        console.log('Datos obtenidos con async/await:', data);
    } catch (err) {
        console.error('Error con async/await:', err);
    }
}


console.log(promise)

peticion()

tryPeticion()
//////////////
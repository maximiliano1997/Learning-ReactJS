import React from 'react';
import { createRoot } from 'react-dom/client';

const tweets = [
    {
        id: 1,
        user: {
            name: 'Imanol Aguer',
            nick: 'aguerima',
            avatar: '',
        },
        tweet: 'Este es el contenido. Estoy aprendiendo React',
    },
    {
        id: 2,
        user: {
            name: 'Maximiliano Aguer',
            nick: 'grakAG',
            avatar: '',
        },
        tweet: 'Hola Bievenido!',
    },
    {
        id: 3,
        user: {
            name: 'Santino Aguer',
            nick: 'aguerima00',
            avatar: '',
        },
        tweet: 'Que onda!',
    },
    {
        id: 4,
        user: {
            name: 'Gabriel Aguer',
            nick: 'gabi001',
            avatar: '',
        },
        tweet: 'Todo es to es practica....',
    },
];

function App() {
    const elements = tweets.map((tweet) => {
        return <h1 key={tweet.id}>{tweet.user.name}</h1>
    });

    return <ul className='tweet-list'>{elements}</ul>
}


const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<App />)
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/card1.css';


const tweets = [
    {
        id: 1,
        user: {
            name: 'Imanol Aguer',
            nick: 'aguerima',
            avatar: 'https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg'
        },
        tweet: 'Este es el contenido. Estoy aprendiendo React',
    },
    {
        id: 2,
        user: {
            name: 'Imanol Aguer',
            nick: 'aguerima',
            avatar: 'https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg'
        },
        tweet: 'Estoy aprendiendo a renderizar listas y hacer mi codigo mucho mas dinamico !!!',
    },
    {
        id: 3,
        user: {
            name: 'Kendra Lust',
            nick: 'aguerima',
            avatar: 'https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg'
        },
        tweet: 'Ya no se que mas escribir...',
    },
]


function TweetCard({ name, avatar, content, username }) {
    return (
        <li className='tweet-card'>
            <div className='user-info'>
                <img
                    src={avatar}
                    alt={`Avatar de ${username}`}
                    className='user-avatar'
                />
                <div>
                    <strong>{name}</strong>
                    <p style={{ margin: 0 }}>@{username}</p>
                </div>
            </div>
            <p className='tweet-content'>{content}</p>
            <a href={`users/${username}`}>Visitar Perfil</a>
        </li>
    );
}


function App() {
    return (
        <ul className='tweet-list'>
            {tweets.map((tweet) => (
                <TweetCard
                    key={tweet.id}
                    name={tweet.user.name}
                    avatar={tweet.user.avatar}
                    content={tweet.tweet}
                    username={tweet.user.nick}
                />
            ))}
        </ul>
    );
}


const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App />);
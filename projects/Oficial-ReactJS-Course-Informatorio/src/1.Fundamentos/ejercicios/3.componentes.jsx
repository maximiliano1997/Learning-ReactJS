import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/card1.css';


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
        <ul>
            <TweetCard
                name='Imanol'
                username='aguerima'
                avatar="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg"
                content='Estoy aprendiendo a armar componentes...!'
            />
            <TweetCard
                name='Maximiliano'
                username='miam'
                avatar="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg"
                content='Este es otro contenido...!'
            />
            <TweetCard
                name='santino'
                username='santima'
                avatar="https://i.pinimg.com/1200x/f3/14/c7/f314c716ccb13d7535c534a579ee9ecd.jpg"
                content='Todo bien entonces...!'
            />

        </ul>
    );
}



const container = document.querySelector('#app');
const root = createRoot(container)
root.render(<App />)
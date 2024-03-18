import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/card.css'
// import { s } from 'vite/dist/node/types.d-FdqQ54oU';

const tweetData = {
    user: {
        name: 'Imanol Aguer',
        nick: 'aguerima',
        avatar:
            'https://i.pinimg.com/1200x/f3/14/c7/f314c716ccb13d7535c534a579ee9ecd.jpg',
    },
    tweet: 'Hola manga de perros kkkk !'
};



const element = (
    <div className='card'>
        <div className='flexer'>
            <img src={tweetData.user.avatar} alt="Avatar" className='profile-pic' />
            <div>
                <strong className='username'>{tweetData.user.name}</strong>
                <p className='nickname'>@{tweetData.user.nick}</p>
            </div>
        </div>
        <p className='tweet-content'>{tweetData.tweet}</p>
        <a href={`/users/${tweetData.user.nick}`}>Visitar Perfil</a>
    </div>
);


const container = document.querySelector('#app');
const root = createRoot(container);
root.render(element)

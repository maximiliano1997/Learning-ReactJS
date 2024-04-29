import react, { useState } from 'react'
import { createRoot } from 'react-dom/client'

import data from './MOVIES_DATA.json';
import './State5.css'

function Movies({ data }) {



    return (
        <section>

            {data.map((movie, index) => {
                const { title, director, releaseDate, duration, maturity, genres, rating, metascore, mainActors, poster, plot } = movie




                let styless = {}

                if (metascore >= 60 && metascore < 100) {
                    styless = {
                        backgroundColor: 'green',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '2px',
                    };
                } else if (metascore >= 50 && metascore < 59) {
                    styless = {
                        backgroundColor: 'yellow',
                        color: 'black',
                        fontWeight: 'bold',
                        padding: '2px',
                    };
                } else {
                    styless = {
                        backgroundColor: 'red',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '2px',
                    };
                }




                const svg = (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                );

                return (
                    <article className="movie-container" key={index}>
                        <div className="s1">
                            <img src={poster} />
                        </div>
                        <div className="s2">
                            <div className="s2a">
                                <h2>{title}</h2>
                                <p>Directed by {director}</p>
                            </div>
                            <div className="s2b">
                                <p>{releaseDate.split('/')[2]}</p>
                                <p>| {duration}</p>
                                <p>| {maturity}</p>
                                <p>| {genres.join(', ')}</p>
                            </div>
                            <div className="s2c">
                                <p id="svg">{svg}</p>
                                <p>{rating}</p>
                                <p>Rate</p>
                                <p>
                                    | <span style={styless}>{metascore}</span>
                                </p>
                            </div>
                            <div className="s2d">
                                <p>Reparto: {mainActors.join(', ')}</p>
                            </div>
                            <div>
                                <p>{plot}</p>
                            </div>
                        </div>

                        <br />

                    </article>
                )

            })}
        </section>
    )
}

function AppMovies() {
    return (
        <>
            <Movies data={data} />
        </>
    )
}



const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<AppMovies />)
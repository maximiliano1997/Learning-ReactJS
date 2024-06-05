import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'

function Home() {
    const [colors, setColors] = useState(['#008000', '#f0f000'])

    const colorsJoined = colors.join();
    console.log({ elJoined: colorsJoined, elnormal: colors })
    const backgroundImage = `linear-gradient(${colorsJoined})`

    return (
        <div>
            <button onClick={() => {
                if (colors.length < 5) {
                    const newColors = [...colors];
                    newColors.push('#ff00ff');
                    setColors(newColors);
                }
            }}>
                Agregar
            </button>
            <div style={{ height: '76px', width: '100px', padding: '50px', backgroundImage }} >
                <div />
                {colors.map((color, index) => {
                    return (
                        <div>
                            Color {index + 1}
                            <input
                                type="color"
                                value={color}
                                onChange={(event) => {
                                    const newColors = [...colors];
                                    newColors[index] = event.target.value;
                                    setColors(newColors);
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div >
    );
}

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<Home />)
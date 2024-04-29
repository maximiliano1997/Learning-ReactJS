import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

export default function Gradiente() {
    const arrColors = ['#0f0fff', '#0fffff']
    const [colors, setColors] = useState(arrColors)
    let gradient = `linear-gradient(${colors.join()})`


    return (
        <div>
            <button onClick={() => {
                if (colors.length < 5) {
                    const newColors = [...colors];
                    newColors.push(`#ff0055`)
                    setColors(newColors)
                }
            }}>Agregar</button>

            <div style={{ width: '400px', height: '400px', backgroundImage: gradient }}></div>

            <div>
                {colors.map((color, index) => (
                    <input
                        key={index}
                        type="color"
                        value={color}
                        onChange={
                            (event) => {
                                let newColors = [...colors];
                                newColors[index] = event.target.value
                                setColors(newColors)
                            }
                        }
                    />
                ))}
            </div>
        </div>
    )
}


const container = document.querySelector('#app')
const root = createRoot(container)
root.render(<Gradiente />)
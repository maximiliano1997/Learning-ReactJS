import React, { useState, useMemo, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function MiGaleria() {
    const [images, setImages] = useState([])
    const [render, setRender] = useState(0)



    useEffect(() => {
        setTimeout(() => {
            const mockImages = [
                { id: 1, url: 'https://www.investopedia.com/thmb/q0_tieus6Z5KN8ZVp2Z_tRPh_oQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Alex_Wong-57a63eab3df78cf4591ab7c2.jpg', description: 'Warren Buffet' },
                { id: 2, url: 'https://image.cnbcfm.com/api/v1/image/101968731-101968731_jack_bogle_r.jpg?v=1600889669&w=1920&h=1080', description: 'Jack Bogle' },
                { id: 3, url: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT8KIPseIm2WWQQ4gDr5DF1WY-RbXl5vm4ISlNOFFNuwAf_yGMaVHmIKwK1_eakCGyO', description: 'Jim Simons' },
                { id: 4, url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Charlie_Munger_%28cropped%29.jpg', description: 'Charlie Munger' },
                { id: 5, url: 'https://www.investopedia.com/thmb/Bo9HhWjbgtCkMgL3DIoCrHsHkg0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/peter-lynch-50368833-977555a4010741408f5fed1cb409daf1.jpg', description: 'Peter Lynch' },
            ];
            setImages(mockImages)
        }, 5000)
        console.log(render)
    }, [render])

    const memoizedImages = useMemo(() => images, [images]);




    return (
        <>
            <div>
                <h1>Galeria de Imagenes</h1>
                <button onClick={() => setRender(render + 1)}>Render</button>
                {memoizedImages.map(image => (
                    <p key={image.id} style={{ dispaly: 'flex', flexDirection: 'column', alignContent: 'center' }}> {image.description}
                        <img src={image.url} alt={image.description} width='auto' height='300px' />
                    </p>
                ))}
            </div>
        </>
    )
}


const container = document.querySelector('#app')
const root = createRoot(container)
root.render(< MiGaleria />)

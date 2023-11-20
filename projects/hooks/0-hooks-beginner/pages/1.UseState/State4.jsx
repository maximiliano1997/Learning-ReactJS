import React, { useState } from 'react';

function FormularioAdd() {

    function handleSubmit(e) {
        e.preventDefault()
        const nuevaAnotacion = { id: '', titulo: e.target.value }
        setLista([...lista, nuevaAnotacion])
    }
    return (
        <div style={{ margin: '20px' }}>
            <form action="" onSubmit={() => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'column' }}>
                Titulo: <input type="text" />
                Contenido: <input type="text" />
                <button>Agregar</button>
            </form>
        </div>
    )
}

function ListaRender({ lista }) {
    return (
        <div>
            {lista.map(anotacion => {
                return (
                    <div key={anotacion.id} style={{ border: '1px solid white', width: '300px' }}>
                        <h4>{anotacion.titulo}</h4>
                        <p>{anotacion.contenido}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default function ListaDeAnotaciones() {
    let list = [
        { id: ``, titulo: 'Shrek', contenido: 'burro' },
        { id: ``, titulo: 'Shrek', contenido: 'burro' },
    ]
    const [lista, setLista] = useState(list)

    return (
        <div>
            <FormularioAdd setLista={setLista} />
            <ListaRender lista={lista} />
        </div>
    )
}

// https://stackblitz.com/edit/stackblitz-starters-vmvvum?file=src%2Findex.js,src%2F1.fundamentos%2Fejercicios%2F10.arrays.js,src%2F1.fundamentos%2Fejercicios%2Fcomponents%2FAddDelButtons.js,src%2F1.fundamentos%2Fejercicios%2Fcomponents%2FAddButton.js,src%2F1.fundamentos%2Fejercicios%2F11.Articles.js,src%2Fstyle.css

// https://stackblitz.com/edit/stackblitz-starters-zhpurm?file=src%2Findex.js,src%2F1.fundamentos%2Fejercicios%2Fejercicios.js
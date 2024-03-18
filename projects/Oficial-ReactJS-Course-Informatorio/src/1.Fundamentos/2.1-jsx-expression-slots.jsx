import React from 'react';
import { createRoot } from 'react-dom/client';

const persona = {
    name: 'Imanol',
    age: 27,
    todoList: ['Desayunar', 'Limpiar', 'Estudiar', 'Trabajar']
}


const element = (
    <p>
        Mi nombre es {persona.name} y {persona.todoList.lenght} tengo cosas por hacer.
    </p>
)


// ...esto luego se compila a:
// const compiledElement = React.createElement(
//     'p',
//     {},
//     'Mi nombre es ',
//     persona.name,
//     ' y tengo ',
//     persona.todoList.length,
//     ' cosas por hacer'
// );


const container = document.querySelector('#app')
const root = createRoot(container)
root.render(element)


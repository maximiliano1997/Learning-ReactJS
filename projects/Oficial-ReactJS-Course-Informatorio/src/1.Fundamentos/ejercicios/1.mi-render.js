function render(reactElement, containerDOMElement) {
    // Creamos el elemento de DOM
    const domElement = document.createElement(reactElement.type);

    console.log(reactElement.props['class'])

    // Agregarle los atributos
    domElement.innerText = reactElement.children;

    for (const clave in reactElement.props) {
        const valor = reactElement.props[clave];
        domElement.setAttribute(clave, valor);
    }

    // Agregar el elemento al DOM
    containerDOMElement.appendChild(domElement);
}



const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.promiedos.com.ar/',
        class: 'red',
    },
    children: 'Leer mas en Promiedos.',
};

const container = document.querySelector('#app');

render(reactElement, container);
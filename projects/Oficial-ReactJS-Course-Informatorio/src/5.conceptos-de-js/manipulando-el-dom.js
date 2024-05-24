// Seleccionar nodos
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
const element = document.querySelector('#app')
console.log(element);

// Editar nodos
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
element.setAttribute('class', 'alguna-clase');
element.innerText = 'Algun texto';
// console.log(element)

// Crear y agregar nodos
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
const pElement = document.createElement('p');
pElement.setAttribute('style', 'color: red;');
pElement.innerText = 'Hello World!';
element.appendChild(pElement);



// Eliminando nodos
// https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
// element.remove()

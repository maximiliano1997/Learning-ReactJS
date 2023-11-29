import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { BsCart4 } from 'react-icons/bs'
import './manejo_estados.css'

function FormularioProductos({ setLista, lista, setTotal }) {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        const nuevoProducto = {
            id: uuidv4(),
            nombre,
            descripcion,
            precio,
            cantidad: 0,
        };

        setLista([...lista, nuevoProducto])


    }

    return (
        <div className="div-primario rounded-lg p-5 m-5 col-span-1 border-2 border-black-50 space-y-5 flex-col items-center">
            <h2 className="text-center text-green-500 font-bold">Cargar Productos</h2>
            <form action="" className="h-[80%] flex-col justify-center space-y-8" onSubmit={handleSubmit}>
                <div className="flex space-y-5 border-2 border-gray-200 rounded-sm">
                    <label htmlFor="nombre" className="flex justify-center w-[100%]" >
                        <input
                            type="text"
                            name="nombre"
                            value={nombre}
                            placeholder='Nombre Producto'
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-[100%] p-1" />
                    </label>
                </div>
                <div className="flex space-y-5 border-2 border-gray-200 rounded-sm" >
                    <label htmlFor="descripcion" className="flex justify-center w-[100%]">
                        <input
                            type="text"
                            name="descripcion"
                            value={descripcion}
                            placeholder='Descripcion el Producto'
                            onChange={(e) => setDescripcion(e.target.value)}
                            className="w-[100%] p-1" />
                    </label>
                </div>
                <div className="flex space-y-5 border-2 border-gray-200 rounded-sm" >
                    <label htmlFor="precio" className="flex justify-center w-[100%]" >
                        <input
                            type="text"
                            name="precio"
                            value={precio}
                            placeholder='Precio del Producto'
                            onChange={(e) => setPrecio(e.target.value)}
                            className="w-[100%] p-1" />
                    </label>
                </div>
                <div className="w-[100%] flex items-center">
                    <button type="submit" class="group relative h-12 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white w-[80%] mx-auto">
                        Cargar Producto
                        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30 "></div>
                    </button>
                </div>
            </form>
        </div >
    )
}

function PreciosAcumulador({ lista, setLista }) {
    let acumulador = lista.reduce(
        (acumulador, producto) => parseInt(acumulador) + parseInt(producto.precio), 0
    );
    return (
        <div>
            <div style={{
                display: 'flex',
                fontSize: '20px',
                alignItems: 'center',
                color: 'green',
                fontWeight: '600',
            }}>
                <BsCart4 style={{ fontSize: '40px' }} />$ {acumulador}
            </div>
        </div>
    )
}


function RenderListaProductos({ lista, setLista }) {


    return (
        <div className="div-secundario rounded-xl col-span-3 border-2 border-black-500 m-5 p-1 flex-col space-y-3 h-[80%] sm:h-[100%] xl:h-[95%] overflow-auto">
            <div className="h-[8%] flex items-center px-8 font-semibold text-xl place-content-between">
                <h2>Lista de Productos</h2>
                <PreciosAcumulador lista={lista} setLista={setLista} />
            </div>
            <hr />
            <div className="div-productos grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 grid-rows-4">
                {lista.map((items) => (
                    <div key={items.id} className="ul-producto w-[200px] col-span-1">
                        <ul className="border-2 border-black-700 space-y-3 rounded-lg p-3">
                            <li className="nombre">{items.nombre}</li>
                            <li className="descripcion">{items.descripcion}</li>
                            <li className="precio">{items.precio}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function ManejoEstados() {
    const [lista, setLista] = useState([
        {
            id: uuidv4(),
            nombre: 'Pan Rallado',
            descripcion: 'Pan rallado apra hacer milongas',
            precio: 1500,
            cantidad: 0,

        },
        {
            id: uuidv4(),
            nombre: 'Papa',
            descripcion: 'Papa para acompañar la ensalada!',
            precio: 1500,
            cantidad: 0,

        },
        {
            id: uuidv4(),
            nombre: 'Pan Rallado',
            descripcion: 'Pan rallado apra hacer milongas',
            precio: 1500,
            cantidad: 0,

        },
        {
            id: uuidv4(),
            nombre: 'Papa',
            descripcion: 'Papa para acompañar la ensalada!',
            precio: 1500,
            cantidad: 0,

        },
        {
            id: uuidv4(),
            nombre: 'Pan Rallado',
            descripcion: 'Pan rallado apra hacer milongas',
            precio: 1500,
            cantidad: 0,

        },
        {
            id: uuidv4(),
            nombre: 'Papa',
            descripcion: 'Papa para acompañar la ensalada!',
            precio: 1500,
            cantidad: 0,

        },
    ]);

    return (
        <div className="container-app">
            <div className="div-principal rounded-xl grid sm:grid-cols-1 xl:grid-cols-4 gap-1 container h-[90%] sm:h-[80%] sm:h-[100vw] xl:h-[90%] overflow-hidden">
                <FormularioProductos lista={lista} setLista={setLista} />
                <RenderListaProductos lista={lista} setLista={setLista} />
            </div>
        </div>
    )
}
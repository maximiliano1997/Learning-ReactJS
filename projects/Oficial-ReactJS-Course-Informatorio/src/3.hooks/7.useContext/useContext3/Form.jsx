import React, { useState } from 'react'
import { usePersonaContext } from './Context'

const Form = () => {
    const { setPersona } = usePersonaContext()

    // Forma 1 de estados
    // const [nameForm, setNameForm] = useState('')
    // const [correoForm, setCorreoForm] = useState('')
    // const [dineroForm, setDineroForm] = useState('')
    // const [edadForm, setEdadForm] = useState(0)
    // const [paisForm, setPaisForm] = useState('')


    // Forma 2 de estados
    const [dataForm, setDataForm] = useState({
        nombre: '',
        correo: '',
        dinero: '',
        edad: '',
        pais: '',
    })


    function handleSubmit(e) {
        e.preventDefault()
        console.log(dataForm, 'dataForm')

        setPersona(dataForm)
    }

    return (
        <>
            <div className='text-black-500 font-bold text-[25px]'>Form</div>
            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-5 bg-gray-500 p-2 m-2'>
                <input type="text" value={dataForm.nombre} onChange={(e) => setDataForm((prev) => ({ ...prev, nombre: e.target.value }))}
                    className='border 1px solid w-[250px]' placeholder='Nombre' />
                <input type="email" value={dataForm.correo} onChange={(e) => setDataForm((prev) => ({ ...prev, correo: e.target.value }))}
                    className='border 1px solid w-[250px]' placeholder='Correo' />
                <input type="number" value={dataForm.dinero} onChange={(e) => setDataForm((prev) => ({ ...prev, dinero: e.target.value }))}
                    className='border 1px solid w-[250px]' placeholder='Dinero' />
                <input type="number" value={dataForm.edad} onChange={(e) => setDataForm((prev) => ({ ...prev, edad: parseInt(e.target.value) }))}
                    className='border 1px solid w-[250px]' placeholder='edad' />
                <input type="text" value={dataForm.pais} onChange={(e) => setDataForm((prev) => ({ ...prev, pais: e.target.value }))}
                    className='border 1px solid w-[250px]' placeholder='Pais' />
                <button>Submit</button>
            </form >
        </>
    )
}

export default Form
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Agregar() {

    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();

    const navigate = useNavigate()

    const data = {
    nombre: nombre,
    email: email,
    telefono: telefono
    }

    function Submit(e){
        e.preventDefault();
        axios.post("http://localhost:3000/usuarios", data)
        .then(navigate('/'))
    }

    return (
        <div className='w-screen h-full flex flex-col justify-center items-center mt-12'>
            <h1 className='text-black text-3xl font-semibold'>Agregar nuevo usuario</h1>
            <form className='w-[50%] h-full flex flex-col justify-center items-center mt-12'>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" placeholder='Ingresa tu nombre' className='w-[80%] bg-white/10 mt-4 text-xl font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Ingresa tu email' className='w-[80%] bg-white/10 mt-4 text-xl font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="phone" placeholder='Ingresa tu telefono' className='w-[80%] bg-white/10 mt-4 text-xl font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <button onClick={Submit} className=' w-[40%] bg-green-600 mt-4 text-xl font-semibold text-white py-4 pl-6'>Agregar</button>
            </form>
        </div>
    )
}

export default Agregar
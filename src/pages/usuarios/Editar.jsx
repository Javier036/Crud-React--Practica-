import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Editar() {
    {/* Declaro tres estado con un valor inicial vacío. El hook useState permite gestionar el estado en componentes funcionales. */}
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const { id } = useParams();

    {/*  Utilice el hook useEffect para cargar los detalles del usuario cuando el componente se monta (cuando se renderiza por primera vez). La solicitud GET se realiza a la URL específica para obtener los detalles del usuario con el ID proporcionado.  */}
    useEffect(() => {
        axios.get(`http://localhost:3000/usuarios/${id}`)
            .then((res) => {
                setNombre(res.data.nombre);
                setEmail(res.data.email);
                setTelefono(res.data.telefono);
            });
    }, []);

    {/* : Creo una función de navegación utilizando useNavigate(). */}
    const navigate = useNavigate();

    {/* Creo un objeto llamado data que contiene las propiedades nombre, email y telefono. Estas propiedades se actualizan con los valores del estado correspondientes. */}
    const data = {
        nombre: nombre,
        email: email,
        telefono: telefono
    };

    {/* Defino una función llamada Actualizar que acepta un evento (e) como argumento. */}
    function Actualizar(e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/usuarios/${id}`, data)
        .then(navigate("/"));
    }

    return (
        <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
            <h1 className=' text-2xl font-semibold'>Editar usuario</h1>
            <form className='w-[50%] h-full flex flex-col justify-center items-center mt-2'>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" placeholder='Ingresa tu nombre' className='w-[80%] bg-white/10 mt-4 text-xl font-normal outline-none py-6 pl-6 border border-zinc-400' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Ingresa tu email' className='w-[80%] bg-white/10 mt-4 text-xl font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="phone" placeholder='Ingresa tu telefono' className='w-[80%] bg-white/10 mt-4 text-xl font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <button onClick={Actualizar} className='bg-teal-600 mt-4 text-xl font-bold border border-zinc-400 text-white py-4 pl-4s'>Actualizar usuario</button>
            </form>
        </div>
    )
}

export default Editar
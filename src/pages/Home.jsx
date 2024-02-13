import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    {/* Declaro un estado llamado "usuarios" como un array Vacio */ }
    const [usuarios, setUsuarios] = useState([]); {/* El hook permite gestionar el estado en componentes funcionalres */ }

    {/* la funcion "cargarUsuarios" realiza una solicitud GET ala URL del localhost utilizando Axios y actualiza el estado "usuarios" con los datos obtenidos. */ }
    function cargarUsuarios() {
        axios.get("http://localhost:3000/usuarios")
            .then((res) => {
                setUsuarios(res.data);
            });
    }

    useEffect(() => {
        cargarUsuarios()
    }, []);

    {/* Defino la funcion "Eliminar" que acepta un parametro "id", esta función realiza una solicitud DELETE a la URL específica para eliminar un usuario con el ID proporcionado.*/ }
    function Eliminar(id) {
        axios.delete(`http://localhost:3000/usuarios/${id}`)
            .then(
                cargarUsuarios()
            )
    }

    return (
        <div className='w-full h-full flex flex-col px-10 py-8'>
            <div className='w-full flex flex-col min-h-[50vh] justify-center items-center'>
                <h1 className='text-black text-3xl font-semibold'>Crud Usuarios</h1>
                {/* Una tabla con encabezados de columna para “ID”, “Nombre”, “Email”, “Telefono” y “Acciones”. */}
                <table className='w-[80%] text-center overflow-hidden overflow-y-scroll mt-8'>
                    <thead className='border-b bg-gray-900'>
                        <tr>
                            <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                                ID
                            </th>
                            <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                                Nombre
                            </th>
                            <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                                Email
                            </th>
                            <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                                Telefono
                            </th>
                            <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*  Aquí estoy utilizando elmétodo map para iterar sobre el array de usuariosd. Por cada usuario, se ejecuta el bloque de código dentro de los paréntesis.*/}
                        {usuarios.map((data, index) => (
                            <tr key={index} className='bg-white border-b'>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                    {index + 1}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900'>
                                    {data.nombre}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900'>
                                    {data.email}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900'>
                                    {data.telefono}
                                </td>
                                <td className='flex justify-center items-center space-x-4 mt-3'>
                                    {/* Crea un enlace que lleva a la ruta específica para ver los detalles del usuario con el ID correspondiente */}
                                    <Link to={`/usuarios/${data.id}`} className='px-6 py-2 text-white font-normal bg-black rounded-lg'>Ver</Link>
                                    {/*  Enlace para editar los detalles del usuario. */}
                                    <Link to={`/editar-usuario/${data.id}`} className='px-6 py-2 text-white font-normal bg-green-600 rounded-lg'>Editar</Link>
                                    {/* Enlace para eliminar el usuario con el ID proporcionado. La función "Eliminar" se ejecuta cuando se hace clic en este enlace. */}
                                    <Link onClick={() => Eliminar(data.id)} to={"/"} className='px-6 py-2 text-white font-normal bg-red-600 rounded-lg'>Eliminar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
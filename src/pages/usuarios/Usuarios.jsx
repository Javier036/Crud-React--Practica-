import axios from 'axios'
import { useState, useEffect } from 'react'

function Usuarios() {
    {/*  Utiliza el hook useParams para obtener el parámetro id de la URL. Esto se utiliza para identificar el usuario específico cuyos detalles se mostrarán. */}
    const { id } = useParams()
    {/*  Declaro un estado llamado "usuario" que inicialmente es undefined */}
    const [usuario, setUsuario] = useState();

    {/* Utilice el hook useEffect para cargar los detalles del usuario cuando el componente se monta (cuando se renderiza por primera vez). La solicitud GET se realiza a la URL específica para obtener los detalles del usuario con el ID proporcionado */}
    useEffect(() => {
        axios.get(`http://localhost:3000/usuarios/${id}`)
            .then((res) => {
                setUsuario(res.data);
            });
    }, []);

    return (
        <div className='w-full h-full flex flex-col mt-32 justify-center items-center '>
            {usuario && (
                <>
                    <div className='w-[700px] h-[200px] flex justify-center items-center px-6 py-4 mt-16'>
                        <div className='w-5/12 flex flex-col space-y-4'>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'> Nombre</h2>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'> Email</h2>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'> Telefono</h2>
                        </div>
                        <div className='w-7/12 flex flex-col space-y-4'>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'>{usuario.nombre}</h2>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'>{usuario.email}</h2>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'>{usuario.telefono}</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Usuarios
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Usuarios from './pages/usuarios/Usuarios'
import Agregar from './pages/usuarios/Agregar'
import Editar from './pages/usuarios/Editar'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios/:id" element={<Usuarios />} />
        <Route path="/agregar-usuario" element={<Agregar />} />
        <Route path="/editar-usuario/:id" element={<Editar />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

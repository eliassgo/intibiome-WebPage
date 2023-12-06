import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageOne from './pages/PageOne'
import Element from './pages/ElementPage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<PageOne />} />
    <Route path="/element/:id" element={<Element />} />
  </Routes>
)

export default Rotas

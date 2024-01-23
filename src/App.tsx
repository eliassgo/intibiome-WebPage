import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">Header</div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
// npm i
// npm i --save styled-components
// npm install --save-dev @types/styled-components
// npm i --save react-redux @reduxjs/toolkit
// npm install @types/react --save-dev

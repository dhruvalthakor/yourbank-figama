import { useState } from 'react'
import Navber from './Navber'
import Container from './Container'
import Footer from './Footer'
import "./App.css"
import Footer1 from './Footer1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
     <Navber/>
     </header>
     <Container/>
     <footer>
      <Footer/>
     </footer>
     <footer>
      <Footer1/>
     </footer>
    </>
  )
}

export default App

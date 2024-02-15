import { useState } from 'react'
import Navbar from './conponents/Navbar'
import Home from './pages/Home'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App

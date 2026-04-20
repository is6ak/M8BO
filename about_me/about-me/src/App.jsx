import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { About } from './About'
import { Games } from './Games'
import { Contact } from './Contact'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}

export default App
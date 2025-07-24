import React from 'react'
import{Routes,Route} from "react-router-dom"
import Chat from "./pages/Chat"
import Landing from "./pages/Landing"
import Register from "./pages/Register"
import Login from "./pages/Login"
import About from "./pages/About";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/about" element={<About />} />

      </Routes>
    </>
  )
}

export default App

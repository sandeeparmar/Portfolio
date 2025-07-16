import './App.css'
import Home from "./components/Home.jsx" ;
import Navbar from "./components/Navbar.jsx" ;
import React from 'react'

function App() {

  return (
    <> 
       <Navbar/>
       <main>
        <Routes>
           <Route path = "/" element ={<Home/>} ></Route>
        </Routes>  
       </main>       
    </>
  )
}

export default App

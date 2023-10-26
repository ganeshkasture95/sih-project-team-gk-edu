import React from 'react'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Footer/>
      <Login/>
    </div>
  )
}

export default App
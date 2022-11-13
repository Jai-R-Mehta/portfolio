import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from  './components/About/About'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portifolio/Portfolio'

const App = () => {
  return (
    <>
      <Header />
      <Nav/>
      <About />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
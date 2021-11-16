import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
        <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
        </Routes>
    </Container>
    </main> 
    <Footer />
    </Router>
  )
}

export default App

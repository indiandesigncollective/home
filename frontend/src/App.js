import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../../frontend/src/Components/Header'
import Footer from '../../frontend/src/Components/Footer'
import ProductScreen from '../../frontend/src/screens/ProductScreen'
import HomeScreen from '../../frontend/src/screens/HomeScreen'
import CartScreen from '../../frontend/src/screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
const App = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
      <Routes>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart/:id' element={<CartScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/' element={<HomeScreen />} />

       </Routes>
        {/* <HomeScreen /> */}
    </Container>
    </main> 
    <Footer />
    </Router>
  )
}

export default App

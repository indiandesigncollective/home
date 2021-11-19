import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../../frontend/src/Components/Header'
import Footer from '../../frontend/src/Components/Footer'
import ProductScreen from '../../frontend/src/screens/ProductScreen'
import HomeScreen from '../../frontend/src/screens/HomeScreen'
const App = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
      <Routes>
      <Route path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
       {/*  <Route path='/' component = {HomeScreen} exact />  */}
       {/* <Route path='/product/:id' component = {ProductScreen}/> */}
       </Routes>
        {/* <HomeScreen /> */}
    </Container>
    </main> 
    <Footer />
    </Router>
  )
}

export default App

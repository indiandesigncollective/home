import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../../frontend/src/Components/Header'
import Footer from '../../frontend/src/Components/Footer'
import ProductScreen from '../../frontend/src/screens/ProductScreen'
import HomeScreen from '../../frontend/src/screens/HomeScreen'
import CartScreen from '../../frontend/src/screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import CategoryScreen from './screens/CategoryScreen'
import WishlistScreen from './screens/WishlistScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

const App = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
      <Routes>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/placeorder' element={<PlaceOrderScreen />} />
      <Route path='/payment' element={<PaymentScreen />} />
      <Route path='/shipping' element={<ShippingScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart/:id' element={<CartScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/wishlist/:id' element={<WishlistScreen />} />
      <Route path='/wishlist' element={<WishlistScreen />} />
      <Route path='/decor' element={<CategoryScreen />} />
      <Route path='/beauty' element={<CategoryScreen />} />
      <Route path='/accessories' element={<CategoryScreen />} />
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

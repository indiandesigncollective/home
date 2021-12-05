import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link, Route } from 'react-router-dom'
//import { LinkContainer } from 'react-router-bootstrap'
import { Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

    return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to='/' style={{color: "#ededed"}}className="navbar-brand">Indian Design Collective</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto box">
              <li className="nav-item">
              <Link to='/decor' className="nav-link">Decor</Link>
              </li>
              <li className="nav-item">
              <Link to='/beauty' className="nav-link">Beauty</Link>
              </li>
              <li className="nav-item">
              <Link to='/accessories' className="nav-link">Accessories</Link>
              </li>
              <li className="nav-item push">
                <Link to='/search' className="nav-link bi bi-search"></Link>
              </li>
              {/* <li>
                <Route render={({ }) => <SearchBox/>}></Route>
              </li> */}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                    <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                    <NavDropdown.Item href='/wishlist'>Wishlist</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : 
              <li className="nav-item">
                  <Link to='/login' className="nav-link bi bi-person-circle"></Link>
                </li>
                }
              <li className="nav-item">
                <Link to='/cart' className="nav-link bi bi-bag"></Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
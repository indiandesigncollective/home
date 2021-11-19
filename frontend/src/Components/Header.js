import React from 'react'
import { Link } from 'react-router-dom'
//import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = () => {
    return (
        <header><nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link to='/'>
            <a class="navbar-brand">Indian Design Collective</a>
            </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto box">
              <li class="nav-item">
              <Link to='/home'>
                <a class="nav-link active">Home
                <span class="visually-hidden">(current)</span>
                </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/decor'>
                  <a class="nav-link">Decor</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/beauty'>
                  <a class="nav-link">Beauty</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/accessories'>
                  <a class="nav-link">Accessories</a>
                </Link>
              </li>
              <li class="nav-item push">
                <Link to='/search'>
                  <a class="nav-link bi bi-search"></a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/login'>
                <a class="nav-link bi bi-person-circle"></a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/cart'>
                  <a class="nav-link bi bi-bag"></a>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
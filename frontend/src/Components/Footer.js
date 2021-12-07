import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return <footer style ={{backgroundColor: "#2b2b2b", height: "35vh", width: "100vw", margin: "0px", marginTop:"70px"}}> 
        <Container>
        <Row>
            <Col className = 'text-center py-3'>
                &copy; Indian Design Collective, 2021.
        </Col>
        </Row>
        <center><Row>
            <Col>
            <p>Contact Us</p>
            <a href= "mailto:contact@indiandesigncollective.com" style = {{textDecoration:"none"}}>
                <i className = "bi bi-envelope"></i> Email Us</a>
                <br></br>
                 <p style = {{color:"#78c2ad", fontSize: "16px"}}><i className = "bi bi-telephone"></i> 9999028375</p>
            </Col>
            <Col>
            <p>Social Media</p>
            <a href= "instagram.com/indiandesigncollective" style = {{textDecoration:"none"}}>
                <i className = "bi bi-instagram"></i>  Instagram</a>
               <br></br> 
            <a href= "https://facebook.com" style = {{textDecoration:"none"}}>
                <i className = "bi bi-facebook"></i>  Facebook</a>    
                <br></br> 
            <a href= "https://twitter.com" style = {{textDecoration:"none"}}>
                <i className = "bi bi-twitter"></i>  Twitter</a>
            </Col>
            <Col>
            <p>Pages</p>
            <a href= "/shop" style = {{textDecoration:"none"}}>  All Products</a>
            <br></br>
            <a href= "/decor" style = {{textDecoration:"none"}}>  Decor</a>
            <br></br>
            <a href= "/beauty" style = {{textDecoration:"none"}}>  Beauty</a>
            <br></br>
            <a href= "/accessories" style = {{textDecoration:"none"}}>  Accessories</a>
            <br></br>
            <a href= "/cart" style = {{textDecoration:"none"}}>  Cart</a>
            <br></br>
            </Col>
        </Row></center>
        </Container>
        </footer>
    
}
export default Footer
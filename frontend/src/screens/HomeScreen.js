import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import products from '../products'
import CartScreen from './CartScreen'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    const pathname = window.location.pathname

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <center><h2>Bestsellers</h2></center>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
                <Row>
                    {products.filter(p => p.Tag === "bestseller").map(product => (
                        <Col key={product._id} s={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            } 
            <br></br>
            <center><h2>Shop By Category</h2></center>
            <br></br>
            <Row>
                <Col> <center>
                    <Card style={{ width: '20rem', marginLeft:'6px', marginRight:'6px'}}>
                    <Link style = {{textDecoration:'none'}} to= {"/decor"}>
                        <Card.Img variant="top" src="https://media.chumbak.com/media/catalog/product/8/9/8907605103902_top.jpg" />
                        </Link> 
                        <Card.Body>
                        <Link style = {{textDecoration:'none'}} to= {"/decor"}>
                            <center>
                                <Card.Title>Decor</Card.Title>
                            </center>
                            
                            </Link> 
                        </Card.Body>
                        </Card>
                   </center>     
                 </Col>  
                 <Col> <center>
                    <Card style={{ width: '20rem' }}>
                    <Link style = {{textDecoration:'none'}} to= {"/beauty"}>
                        <Card.Img variant="top" src="https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605102042_plus35.jpg" />
                     </Link> 
                        <Card.Body>
                        <Link style = {{textDecoration:'none'}} to= {"/beauty"}>
                            <center><Card.Title>Beauty</Card.Title></center>
                        </Link>    
                        </Card.Body>
                        </Card>
                        </center> 
                 </Col>  
                 <Col> <center>
                    <Card style={{ width: '20rem' }}>
                    <Link style = {{textDecoration:'none'}} to= {"/accessories"}>
                        <Card.Img variant="top" src="https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605098697_plus24.jpg" />
                        </Link> 
                        <Card.Body>
                        <Link style = {{textDecoration:'none'}} to= {"/accessories"}>
                            <center><Card.Title>Accessories</Card.Title></center>
                            </Link> 
                        </Card.Body>
                        </Card>
                        </center> 
                 </Col>       
            </Row>
            
        </>
    )
}

export default HomeScreen
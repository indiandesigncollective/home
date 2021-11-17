import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import products from '../products'

const HomeScreen = () => {
    return (
        <>
            <center><h2>Bestsellers</h2></center>
            <Row>
                {products.filter(p => p.Tag === "bestseller").map(product => (
                
                    <Col key={product._id} s={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                     </Col>
                ))
                }
            </Row>
        </>
    )
}

export default HomeScreen

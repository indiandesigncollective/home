import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { useLocation } from 'react-router-dom';

const DecorScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    let location = useLocation()
    const pathName = String(location.pathname.split('/')[1])
    const title = pathName.charAt(0).toUpperCase()+pathName.slice(1)
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <center><h2>{title}</h2></center>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
                <Row>
                {products.filter(p => p.Category === pathName).map(product => (
                    <Col key={product._id} s={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
            } 
        </>
    )
}

export default DecorScreen
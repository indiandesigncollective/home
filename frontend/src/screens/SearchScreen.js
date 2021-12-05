import React, { useEffect } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { Link, useParams, Route, Routes } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import SearchBox from '../constants/SearchBox'
// import SearchBox from '../Components/SearchBox'
const SearchScreen = ({ match }) => {
    const { keyword }  = useParams()
    console.log(keyword)
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    // const pathname = window.location.pathname 

    useEffect(() => {
        dispatch(listProducts(keyword))
    }, [dispatch])



    return (
        <>
        <center><h2>Shop Products</h2></center>
        <br></br>
        <center>
        <SearchBox></SearchBox>
        </center>
        <br></br>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
            <Row>
                {products.map(product => (
                    <Col key={product._id} s={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        } 
    </>
    )
}

export default SearchScreen

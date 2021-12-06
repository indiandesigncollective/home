import React, { useEffect, useState } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { Link, useParams, Route, Routes } from 'react-router-dom'
import { Card, Form } from 'react-bootstrap'
import SearchBox from '../constants/SearchBox'
// import SearchBox from '../Components/SearchBox'
import Fuse from "fuse.js"

const SearchScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const [query, updateQuery] = useState('');
    const fuse = new Fuse(products, {
        keys: [
          'Name', 'Description'
        ]
      })
   
    const results = fuse.search(query)
    const productResults = query ? results.map(product => product.item) : products

     const onSearch = ({ currentTarget }) => {
        updateQuery(currentTarget.value);
      }

    return (
        <>
        <center><h1>Shop All Products</h1></center>
          <Form>
              <Form.Control
          type = "text"
          value = {query}
          placeholder = "Search all products"
          onChange = {onSearch}>
          </Form.Control>
          </Form>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
                <Row>
                    {productResults.map(product => (
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

import React, { useEffect, useState } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { Link, useParams, Route, Routes } from 'react-router-dom'
import { Card, Form } from 'react-bootstrap'
import Fuse from "fuse.js"

const SearchScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const [query, updateQuery] = useState('')
    const [category, setCategory] = useState('All Categories')
    const [sort, setSort] = useState('')
    const fuse = new Fuse(products, {
        keys: [
          'Name'
        ]
      })
   
    const results = fuse.search(query)
    const productResults = query ? results.map(product => product.item) : products
    const catResults = (category === "All Categories") ? productResults : productResults.filter(p => p.Category === category.charAt(0).toLowerCase()+category.slice(1))
    let sortResult = catResults
    if (sort === "Sort By: Default") {
         sortResult = catResults
    }
    else if (sort === "Sort By: Low to High"){
        // sortResult = (catResults.Price).sort()
        sortResult = catResults.sort((firstItem, secondItem) => firstItem.Price - secondItem.Price)
    }
    else {
        // sortResult = catResults.Price.sort().reverse()
        const temp = catResults.sort((firstItem, secondItem) => firstItem.Price - secondItem.Price)
        sortResult = catResults.reverse()
    }

    console.log(productResults)
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

          <br></br>

          <Row>
          <Col md = {3}>
          <Form.Select value = {category} onChange={(e) => setCategory(e.target.value)}>
            <option>All Categories</option>  
            <option>Accessories</option>
            <option>Beauty</option>
            <option>Decor</option>
        </Form.Select>
          </Col>
          <Col md = {3}></Col>
          <Col md = {3}></Col>
          <Col md = {3}>
          <Form.Select value = {sort} onChange={(e) => setSort(e.target.value)}>
            <option>Sort By: Default</option>  
            <option>Sort By: Low to High</option>
            <option>Sort By: High to Low</option>
        </Form.Select>
          </Col>
          </Row>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
                <Row>
                    {sortResult.map(product => (
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

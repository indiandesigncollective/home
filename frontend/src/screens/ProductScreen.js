import React, {useState, useEffect } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link, useParams } from 'react-router-dom'
import Product from '../Components/Product'
import { useNavigate } from "react-router"
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Carousel, Toast, Form} from 'react-bootstrap'
import Rating from '../Components/Rating'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { listProductDetails } from '../actions/productActions'
import { listProducts } from '../actions/productActions'
//import products from '../products'
//import Zoom from 'react-img-zoom'

const ProductScreen = ({ match }) => {
    const [qty, setQty] = useState(1)
    const { id } = useParams()
    const dispatch = useDispatch()
    const productDetails = useSelector((state) => state.productDetails)
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    const { product } = productDetails
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(listProductDetails(id))   
    }, [dispatch, match]) 
    //const product = products.find(p => p._id === parseInt(id))        
    return (
        <>
        <ol className="breadcrumb bg-secondary">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href={`/products/${product.Category}`}>{product.Category}</a></li>
            <li className="breadcrumb-item active">{product.Name}</li>
        </ol>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <Row>
            <Col>
                <Carousel fade>
                    <Carousel.Item>
                        <div>
                            <Image src={product.Image_URL_1} alt={product.Name} fluid></Image>
                        </div>
                        {/* <Zoom img={product.Image_URL_1} zoomScale={2} width={600} height={600}/> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={product.Image_URL_2} alt={product.Name} fluid></Image>
                    {/* <Zoom img={product.Image_URL_2} zoomScale={2} width={600} height={600}/> */}
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>{product.Name}</h2> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Category: {product.Category}</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h4><Rating value = {product.Ratings} color = '#f9cd66' /></h4>
                    </ListGroup.Item>
                    <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Price:
                                </Col>
                                <Col>
                                <strong>&#8377; {product.Price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Status:
                                </Col>
                                <Col>
                                {product.Quantity > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                        <div class="form-group">
                            <select multiple="" className="form-select" id="exampleSelect2" value = {qty} onChange = {(e) =>  setQty(e.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                             </select>
                             </div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        <ListGroupItem>
                            <Link to= {`/cart/${id}?qty=${qty}`} >
                            {/* <Link to= {`/cart/${id}`} > */}
                            <Button
                            className='btn btn-block btn-success mb-2' 
                            type='button' 
                            disabled={product.Quantity === 0}>
                                Add to Cart
                            </Button>
                           </Link> 
                           <Link to = {`/wishlist/${id}`}>
                           <Button
                            className='btn btn-block btn-secondary mb-2' 
                            type='button' >
                                Add to Wishlist
                            </Button>
                            </Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                    <ListGroup.Item>
                        <br></br>
                        <p>{product.Description}</p>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        
        )}
        <center><h2>More Like This</h2></center>
        <Row>
        {products.filter(p => p.Category === product.Category && p.Tag === "bestseller" && p.Name !== product.Name).map(product => (
            <Col key={product._id} s={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
    </Row>

        </>
    )
}

export default ProductScreen
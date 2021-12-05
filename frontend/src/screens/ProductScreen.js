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
import { listProductDetails, createProductReview } from '../actions/productActions'
import { listProducts } from '../actions/productActions'
//import products from '../products'
import Zoom from 'react-img-zoom'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

const ProductScreen = ({ match }) => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const { id } = useParams()
    const dispatch = useDispatch()
    const productDetails = useSelector((state) => state.productDetails)
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    const { product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const { success:successProductReview, error: errorProductReview} = productReviewCreate
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    useEffect(() => {
        if(successProductReview) {
            alert('Review Submitted!')
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET})
        }
        dispatch(listProductDetails(id))   
    }, [dispatch, match, successProductReview]) 

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(id, {
            rating,
            comment
        }))
    }

    let navigate = useNavigate()

    const recommend = products.filter(p => p.Category === product.Category && p.Tag === "bestseller" && p.Name !== product.Name)
    const chunk1 = recommend.slice(0,4) 
    const chunk2 = recommend.slice(4,8)

    const s = String(product.Category)
    const title = s.charAt(0).toUpperCase()+s.slice(1)      
    return (
        <>
        <ol className="breadcrumb bg-secondary">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href={`/${product.Category}`}>{title}</a></li>
            <li className="breadcrumb-item active">{product.Name}</li>
        </ol>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <>
        <Row>
            <Col>
                <Carousel fade
                controls = {false}
                interval = "3000">
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
                        <h5>Category: {title}</h5>
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
        <br></br>
        <Row>
            <Col md={6}>
                <h2>Reviews</h2>
                {product.reviews.length === 0 && <Message>No Reviews</Message>}
                <ListGroup variant='flush'>
                    {product.reviews.map(review => (
                        <ListGroup.Item key={review._id}>
                            <strong>{review.name}</strong>
                            <Rating value={review.rating}/>
                            <p>{review.comment}</p>
                        </ListGroup.Item>
                    ))}
                    <ListGroup.Item>
                        <h2>Write a Customer Review</h2>
                        {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
                        {userInfo ? (<Form onSubmit={submitHandler}>
                            <Form.Group controlId='rating'>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control as ='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                                    <option value=''>Select...</option>
                                    <option value='1'>1 - Poor</option>
                                    <option value='2'>2 - Fair</option>
                                    <option value='3'>3 - Good</option>
                                    <option value='4'>4 - Very Good</option>
                                    <option value='5'>5 - Excellent</option>
                                </Form.Control>
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId='comment'>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as='textarea' row='3' value={comment} onChange={(e) => setComment(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <br></br>
                            <Button type='submit' variant='primary'>
                                Submit review
                            </Button>
                        </Form>) : <Message>Please <Link to='/login'>sign in </Link>to write a review</Message> }
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        </>
        )}
        <center><h2>More Like This</h2></center>
        <Carousel fade
        prevIcon = {<span aria-hidden="true" className="bi bi-arrow-right-square-fill" />}
        // controls = {false}
        interval = "3000" 
        >
        <Carousel.Item>
        <Row>
        {chunk1.map(product => (
                        <Col key={product._id} s={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>        
                    ))}         
    </Row>
    </Carousel.Item>
    <Carousel.Item>
        <Row>
        {chunk2.map(product => (
                        <Col key={product._id} s={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>        
                    ))}         
    </Row>
    </Carousel.Item>
    </Carousel>
        </>
    )
}

export default ProductScreen
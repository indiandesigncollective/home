import React, {useState, useEffect } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Carousel, Toast, FormControl, Form} from 'react-bootstrap'
import Rating from '../Components/Rating'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { listProductDetails } from '../actions/productActions'
//import products from '../products'
//import Zoom from 'react-img-zoom'

const ProductScreen = ({ history, props, match }) => {
    const [qty, setQty] = useState(0)
    const { id } = useParams()
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const quant = [1, 2, 3, 4, 5, 6, 7, 8,9, 10]
    const {loading, error, product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(id))   
    }, [dispatch, match]) 
    //const product = products.find(p => p._id === parseInt(id))
    const addToCartHandler = () => {}
    //     this.props.history.push(`/cart/$(match.params.id)/?qty=$(qty)`)
    // }
    return (
        <>
        <ol class="breadcrumb bg-secondary">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="#">{product.Category}</a></li>
            <li class="breadcrumb-item active">{product.Name}</li>
        </ol>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <Row>
            <Col>
                <Carousel fade swipeable overscrollable>
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
                                        <Form.Control as='select' value = {qty} onChange = {(e) => setQty(e.target.value)}>
                                          {quant.map((x) => (
                                              <option key ={x} value ={x}>
                                                  {x}
                                              </option>))} 
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        <ListGroupItem>
                            <Button onClick = {addToCartHandler}
                            className='btn btn-block btn-success mb-2' 
                            type='button' 
                            disabled={product.Quantity === 0}>
                                Add to Cart
                            </Button>
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

        </>
    )
}

export default ProductScreen
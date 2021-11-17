import React, {useState} from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link, useParams } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Carousel, Toast} from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../products'
import Zoom from 'react-img-zoom'

const ProductScreen = ({ props, match }) => {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    const { id } = useParams()
    const product = products.find(p => p._id === parseInt(id))
    return (
        <>
        <ol class="breadcrumb bg-secondary">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="#">{product.Category}</a></li>
            <li class="breadcrumb-item active">{product.Name}</li>
        </ol>
            <Row>
                <Col>
                    <Carousel fade swipeable overscrollable>
                        <Carousel.Item>
                            {/* <div> */}
                            <Zoom
                            img={product.Image_URL_1}
                            zoomScale={2}
                             width={600}
                            height={600}/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Zoom
                            img={product.Image_URL_2}
                            zoomScale={2}
                             width={600}
                            height={600}/>
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
                            <ListGroupItem>
                                <Button onClick={toggleShowA} className='btn btn-block btn-success mb-2' type='button' disabled={product.Quantity === 0}>
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
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <strong className="me-auto">Indian Design Collective</strong>
                    <small>Now</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you've added {product.Name} to cart!</Toast.Body>
                    </Toast>
        </>
    )
}

export default ProductScreen

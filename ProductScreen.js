import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../products'

const ProductScreen = ({ props, match }) => {
    const { id } = useParams()
    const product = products.find(p => p._id === parseInt(id))
    return (
        <>
        <Link className='btn btn-dark my-3' to='/'>
            Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.Image_URL_1} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                {product.Name}
                            </h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.Ratings} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: &#8377;{product.Price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.Description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
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
                                <Button  className='btn-block' type='button' disabled={product.Quantity === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen


//Shows all order details
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Row, Col, ListGroup, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { getOrderDetails } from '../actions/orderActions'
import { resetCart } from '../actions/cartActions'

const OrderScreen = ( {match} ) => {

    const { id } = useParams()
    console.log(id)
    //const orderId = match.params.id
    const dispatch = useDispatch()

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, loading, error } = orderDetails
    
    if(!loading){
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    
    }
    useEffect(() => {
        if(!order || order._id !== id) {
            dispatch(getOrderDetails(id))
        }
        dispatch(resetCart())
    }, [order, id])

    // useEffect(() => {
    //     dispatch(getOrderDetails(id))
    // }, [])

    return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <>
        <h1>Order {order._id}</h1>
        <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p><strong>Name: </strong> {order.user.name}</p>
                            <p><strong>Email: </strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                            <p>
                                <strong>Address: </strong>
                                {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Your order is on the house!</strong>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {order.orderItems.length === 0 ? <Message>Order is empty!</Message> :
                            <ListGroup variant='flush'> {order.orderItems.map((item, index) => (
                                <ListGroup.Item key={index}> 
                                <Row>
                                    <Col md={1}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>

                                    <Col>
                                    <Link to={`/product/${item.product}`}>
                                        {item.name}
                                    </Link>
                                        </Col>

                                    <Col md={4}>
                                        {item.qty} x &#8377;{item.price} = &#8377;{item.qty * item.price} 
                                    </Col>
                                </Row>
                                </ListGroup.Item>
                            ))} </ListGroup> }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>&#8377;{order.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>&#8377;{order.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax (15%)</Col>
                                    <Col>&#8377;{order.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>&#8377;{order.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
    </>
}

export default OrderScreen

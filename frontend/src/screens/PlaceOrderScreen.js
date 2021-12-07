//final check before checkout
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import CheckoutSteps from '../Components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { removeFromCart, resetCart } from '../actions/cartActions'
import { logout } from '../actions/userActions'

const PlaceOrderScreen = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    let navigate = useNavigate()
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

    cart.shippingPrice = cart.itemsPrice > 10000 ? 0 : 100
    cart.taxPrice = Number((0.15 * cart.itemsPrice).toFixed(2))
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
        if(success) {
            navigate(`/order/${order._id}`)
        }
    }, [success])

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }),

        )
    }
    return (
        <>
            <CheckoutSteps step1 step2 step3 step4/>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address:</strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>your order is on the house!</strong>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0 ? <Message>Your cart is empty!</Message> :
                            <ListGroup variant='flush'> {cart.cartItems.map((item, index) => (
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
                                    <Col>&#8377;{cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>&#8377;{cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax (15%)</Col>
                                    <Col>&#8377;{cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>&#8377;{cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type='button' className='btn-block' disabled={cart.cartItems === 0} onClick={placeOrderHandler} >Place Order</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen

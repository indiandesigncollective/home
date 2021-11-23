import React, { useEffect } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Carousel, Form} from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({history}) => {
    const { id } = useParams()
    let location = useLocation()
    const quant = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if(id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const removeFromCartHandler  = (id) => {
        dispatch(removeFromCart(id))
        }

    const checkoutHandler = () => {
        navigate('login/?redirect=shipping')
    }

    return (
        <Row>
           <Col md = {8}>
            <h1>Shopping Bag</h1>
            {cartItems.length === 0 ? (
            <Message>Your cart is empty  <br></br><Link to ="/">Go back to home</Link></Message>
            ) : <Card>
            <ListGroup variant = "flush">
                {cartItems.map(item => (
                    
                    <ListGroup.Item key = {item.product}>
                        <Row>
                            <Col md = {3}>
                            <Image src = {item.image} alt = {item.name} fluid rounded></Image>
                            </Col>
                            <Col md = {3}>
                                <Link style = {{textDecoration:'none'}} to = {`/product/${item.product}`}>{item.name}</Link>
                            </Col>
                            <Col md={2}> &#8377; {item.price}</Col>
                            <Col md = {2}>
                            <div class="form-group">
                            <select multiple="" className="form-select" id="exampleSelect2" value = {item.qty} onChange = {(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                             </select>
                             </div>
                            </Col>
                            <Col md = {2}>
                                <Button type = "button" variant = 'light' onClick = {()=>removeFromCartHandler(item.product)}>
                                <i className = "bi bi-trash"></i></Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )
                    
                    )}
            </ListGroup> </Card>        
        }
           </Col>
           <Col md = {4}>
            <Card>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <h2>Subtotal ({cartItems.reduce((acc, item)=> acc + item.qty, 0)}) items</h2>

                        <h5 style = {{fontFamily: 'sans-serif', fontSize: '15px'}}>Subtotal: &emsp; &#8377; {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} </h5>
                        <h5 style = {{fontFamily: 'sans-serif', fontSize: '15px'}}>Shipping &emsp; &#8377; 99</h5>
                        <h4>Total: {cartItems.reduce((acc, item) => acc +99+ item.qty * item.price, 0).toFixed(2)}</h4>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
                            Checkout</Button>                
                    </ListGroup.Item>
                </ListGroup>
            </Card>
           </Col>
        </Row>
    )
}

export default CartScreen
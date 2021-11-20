import React, { useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Carousel, Form} from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({history}) => {
    const { id } = useParams()
    let location = useLocation()
    const quant = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if(id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const removeFromCartHandler  = (id) => {
        console.log('remove')
    }

    return (
        <Row>
           <Col md = {8}>
            <h1>Shopping Bag</h1>
            {cartItems.length === 0 ? (
            <Message>Your cart is empty  <br></br><Link to ="/">Go back to home</Link></Message>
            ) : <ListGroup variant = "flush">
                {cartItems.map(item => (
                    <ListGroup.Item key = {item.product}>
                        <Row>
                            <Col md = {3}>
                            <Image src = {item.image} alt = {item.name} fluid rounded></Image>
                            </Col>
                            <Col md = {4}>
                                <Link style = {{textDecoration:'none'}} to = {`/product/${item.product}`}>{item.name}</Link>
                            </Col>
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
            </ListGroup>        
        }
           </Col>
           <Col md = {4}>
            <Card>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <h2>Subtotal ({cartItems.reduce((acc, item)=> acc + item.qty, 0)}) items</h2>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
           </Col>
        </Row>
    )
}

export default CartScreen
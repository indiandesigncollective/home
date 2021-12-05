import React, { useEffect } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Carousel, Form} from 'react-bootstrap'
import { login } from '../actions/userActions'
import removeFromWish  from '../actions/wishActions'
import  addToWish  from '../actions/wishActions'

const WishScreen = ({ }) => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const wish = useSelector(state => state.wish)
    const { wishItems } = wish

    useEffect(() => {
        if(id) {
            dispatch(addToWish(id))
        }
    }, [dispatch, id])

    const removeFromWishHandler  = (id) => {
        dispatch(removeFromWish(id))
        }
    const addToCartHandler  = (id) => {
            dispatch(addToCart(id))
            }   

    let navigate = useNavigate()
    // const checkoutHandler = () => {
    //         navigate('/login?redirect=/shipping')
    //     }

    return (
        <Row>
           <Col md = {9}>
            <h1>Shopping Bag</h1>
            {wishItems.length === 0 ? (
            <Message>Your wish is empty  <br></br><Link to ="/">Go back to home</Link></Message>
            ) : <ListGroup variant = "flush">
                {wishItems.map(item => (
                    <ListGroup.Item key = {item.product}>
                        <Row>
                            <Col md = {3}>
                            <Image src = {item.image} alt = {item.name} fluid rounded></Image>
                            </Col>
                            <Col md = {3}>
                                <Link style = {{textDecoration:'none'}} to = {`/product/${item.product}`}>{item.name}</Link>
                            </Col>    
                            <Col md = {1}>
                                <Button type = "button" variant = 'light' onClick = {()=>removeFromWishHandler(item.product)}>
                                <i className = "bi bi-trash"></i></Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                )
                    
                    )}
            </ListGroup>        
        }
           </Col>
           <Col md = {3}>
            <Card>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <h2>Subtotal ({wishItems.reduce((acc, item)=> acc + item.qty, 0)}) items</h2>
                        &#8377; {wishItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button type='button' className='btn-block' disabled={wishItems.length === 0} onClick={checkoutHandler}>
                            Proceed to Checkout</Button>                
                    </ListGroup.Item>
                </ListGroup>
            </Card>
           </Col>
        </Row>
    )
}

export default WishScreen

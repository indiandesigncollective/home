//items from wishlist can be added to cart or deleted. No qty associated with them.
import React, { useEffect } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Carousel, Form} from 'react-bootstrap'
import { login } from '../actions/userActions'
import { removeFromWish, addToWish }  from '../actions/wishActions'
import  { addToCart }  from '../actions/cartActions'

const WishScreen = ({ match }) => {
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
        let navigate = useNavigate()
    const addToCartHandler  = (id) => {
            dispatch(removeFromWish(id))
            dispatch(addToCart(id))
            navigate(`/cart/${id}?qty=1`)
            }   
    
 
    // const checkoutHandler = () => {
    //         navigate('/login?redirect=/shipping')
    //     }

    return (
        <Row>
           <Col md = {9}>
            <h1>Wishlist</h1>
            {wishItems.length === 0 ? (
            <Message>Your wishlist is empty.  <br></br><Link to ="/">Go back to home</Link></Message>
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
                            <Col md = {3}>
                                <Button type = "button" variant = 'light' onClick = {()=>addToCartHandler(item.product)}>
                                <i className = "bi bi-bag"></i> Move to Cart</Button>
                            </Col>
                            <Col md = {2}>
                                {item.countInStock > 200 ? 
                                <p>In Stock.</p> :
                                <p> Running Low. </p>}

                            </Col>
                        </Row>
                    </ListGroup.Item>
                
                )
                    )}
                    
            </ListGroup>        
        }
        </Col>  
        </Row>
    )
}

export default WishScreen

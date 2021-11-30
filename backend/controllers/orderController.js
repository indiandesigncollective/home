import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

//@desc Create new order
//@route POST /api/products
//@access Private
const addOrderItems = asyncHandler(async (req,res) => {
    const { orderItems, shippingAddress, itemsPrice, taxPrice, ShippingPrice, totalPrice } = req.body

    if(orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return }
        else {
            const order = new Order({
                orderItems, user: req.user._id, shippingAddress, itemsPrice, taxPrice, ShippingPrice, totalPrice
            })

            const createdOrder = await order.save()

            res.status(201).json(createdOrder)
        }
        
    })

export {addOrderItems}
import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import '../Style/Cart.css'
import watch from "../images/watch.jpg"
import {AiFillDelete} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import Container from '../component/Container'
export default function Cart() {
  return (
   <>
   <Meta title={"Cart"} />
   <BreadCrumb title="Cart" />
   <Container class1="cart-wrapper home-wrapper-2 py-5">
   
        <div className="row">
            <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center">
            <h4 className='cart-col-1'>Product</h4>
            <h4 className='cart-col-2'>Price</h4>
            <h4 className='cart-col-3'>Quantity</h4>
            <h4 className='cart-col-4'>Total</h4>
            </div>

            <div className="cart-data mb-2 d-flex justify-content-between align-items-center">
            <div className='cart-col-1 gap-15 d-flex align-items-center'>
            <div className='w-25'>
            <img src={watch} alt="product" className='img-fluid' />
            </div>
            <div className='w-75'>
            <h5 >lund</h5>
            <p>Size: etjijg   
            </p>
            <p>Color:yrhn</p>
            </div>
            
            </div>
            <div className='cart-col-2'>
            <h5 className="price">$100.00</h5>
            </div>
            <div className='cart-col-3 gap-15 d-flex align-items-center'>
            <div><input type="number" className="form-control" 
            min={1} max={10}
            /></div>
            <div><AiFillDelete className='text-danger' /></div>
            </div>
            <div className='cart-col-4'>
            <h5 className="price">$100.00</h5>
            </div>
            
            </div>
           <div className="col-12 py-2 mt-4">
           <div className="d-flex justify-content-between align-items-baseline">
            <NavLink to="/product" className='button mt-4 '>
           Continue to shopping
            </NavLink>
            <div className='d-flex justify-content-end gap-20 flex-column align-items-end'> 
            <h5>SubTotal : $100.00</h5>
            <p>Taxes and Shipping Calculated at checkout</p>
           <NavLink className='button' to="/checkout">Check Out</NavLink></div>
            </div>
           </div>

            </div>
        </div>

   </Container>
   
   </>
  )
}

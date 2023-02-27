import React from 'react'
import { NavLink } from 'react-router-dom'
import Meta from '../component/Meta';
import {BiArrowBack} from 'react-icons/bi'
import watch from '../images/watch.jpg'
import '../Style/Cart.css';
import Container from '../component/Container';
export default function Checkout() {
  return (<>
    <Meta title={"checkout"} />

    <Container class1="checkout-wrapper py-5 home-wrapper-2">
       
            <div className="row">
                <div className="col-7">
                <div className="chekout-left-data">
                    <h3 className="website-name">Dev corner</h3>
                    <nav aria-label="breadcrumb" style={{"--bs-breadcrumb-divider": '>'}}>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                     <NavLink className='text-dark  total-price' to="/cart">Cart</NavLink></li>&nbsp; /
                      <li className="breadcrumb-item active total-price" aria-current="page">
                      Information</li>&nbsp;/
                   
                      <li className="breadcrumb-item active total-price" aria-current="page">
                      Payment</li>&nbsp; /
                       <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                    </ol>
                  </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-detail total">
                Chandrakrpal(chandra@gmail.com)
                </p>
                <h4 className='mb-3'>Shipping Address</h4>
              <form action="" className='d-flex gap-15 justify-content-between flex-wrap'>
              <div className=' w-100'>
              <select name="" id="" className='form-control form-select'>
                  <option value="" selected disabled>Select Country</option>

              </select>
              </div>
              <div className='flex-grow-1'>
              <input type="text" className="form-control" placeholder='First Name' /></div>
              <div className='flex-grow-1'>
              <input type="text" className="form-control"  placeholder='Last Name'/></div>
              <div className='w-100'>
              <input type="text" className="form-control" placeholder='Address' /></div>
              <div className="w-100">
              <input type="text" className='form-control' placeholder='Street,Apartment Etc' /></div>
             <div className="flex-grow-1">
             <input type="text" className='form-control' placeholder='city'/>
             </div>
              <div className='flex-grow-1'>
              <select name="" id="" className='form-control form-select '>
              <option value=" " selected disabled>Select State</option>
              </select></div>
              <div className='flex-grow-1'>
              <input type="text" placeholder='Zip Code' className="form-control" /></div>

             
              <div className='w-100'>
              <div className="d-flex justify-content-between align-items-center">
              <NavLink to="/cart" className='text-dark'>
              <BiArrowBack className='me-2 fs-5' />
              Return To Cart</NavLink>
              <NavLink to="/cart" className='button'>Continue To Shipping</NavLink>
              </div>
              </div>
              
              </form>


                </div>
                
                
                </div>
             <div className="col-5">
             <div className='border-bottom py-4'>
            <div className="d-flex justify-content-between align-items-between gap-10 mb-2">
            
            <div className='w-75 d-flex gap-10'>
            <div className='w-25 position-relative'>
            <span className="badge p-1 rounded-circle bg-secondary text-white position-absolute "
            style={{width:"-10px",right:"3px"}}>
            1
            </span>
            <img src={watch} alt="product" className="img-fluid" />
            </div>
           <div>
           <h5 className="total-price">gs</h5>
           <p className='total-price'>bhdgfg</p>
           </div>
            </div>
            <div className='flex-grow-1'>
            <h5 className='total'>$100</h5>
            </div>
            </div>
             
             </div>
             <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
             <p className='mb-0 total'>subtotal</p>
             <p className='mb-0 total-price'>$971.00</p>
             
             </div>
             <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
             <p className='mb-0 total'>Shipping</p>
             <p className='mb-0 total-price'>$29.00</p>
             
             </div>
             <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
             
             <h4 className='total'>Total</h4>
             <h5 className='total-price'>$1000.00</h5>
             
             
             </div>
             </div>

            </div>

   
    </Container>
    </>
  )
}

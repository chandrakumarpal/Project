import React from 'react'
import '../Style/PopularProduct.css'
import { NavLink } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import watch from "../images/watch.jpg"
export default function PopularProduct() {
  return (
    <>
    <div className="col-6 my-3 d-flex justify-content-between ">
    <div className="special-product-card">
    <div className="d-flex justify-content-between ">
    <div>
    <img src={watch} alt="watch" />
    </div>
    <div className='special-product-content'>
    <h5 className='brand'>Havels</h5>
    <h6 className='title'>Samsung Galaxy<br/> S13+ Mobile Phone</h6>
    <ReactStars count={5} size={24} value="3" edit={false} activeColors="#ffd700" />
    <p className="price"><span className="red-p">$100&nbsp;<strike>$200</strike></span></p>
    <div className='discount-till d-flex align-items-center ga-10' >
    <p className='mb-0'>
    <b>5</b>days
    </p>
    <div className="d-flex gap-10 align-items-center">
    <span className="badges rounded-circle p-2 bg-warning">1</span>
    <span className="badges rounded-circle p-2 bg-warning">1</span>
    <span className="badges rounded-circle p-2 bg-warning">1</span>
    </div>
    <div className="product-count ">
    <p><b>5</b>&nbsp;&nbsp;Products</p>
  
  </div>
 
    </div>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<NavLink to="/" className="button mt-4">Add To Cart</NavLink>
    </div>
    
    </div>
    </div>
    </div>
  
    </>
  )
}

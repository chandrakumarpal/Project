import React from 'react'
import '../Style/ProductContent.css';
import ReactStars from 'react-rating-stars-component';
import { NavLink, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';

import watch from '../images/watch.jpg';
import watch2 from '../images/watch-1.avif';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg'
export default function ProductContent(props) {
  const {grid}=props;
  let location=useLocation();
  console.log(location);

  return (
   <>
   <div className={`${location.pathname==='/product' ? `gr-${grid}` : "col-3" }`}>
   <NavLink to={`${location.pathname==='/' ? 'product/:id' : ":id"}`} className="product-card position-relative">
   <div className="wishlist-icon position-absolute">
   <button className='border-0 bg-transparent'>
   <img src={wish} alt="wishlist" />
   </button>
   </div>
   <div className="product-image">
   <button className='border-0 bg-transparent'>
   <img src={watch} alt="watch" className=' img-fluid' /></button>
   <button className='border-0 bg-transparent'>
   <img src={watch2}  alt="watch"  className=' img-fluid change'/></button>
   </div> 
   <div className="product-details">
   <h6 className="brand">Havels</h6>
   <h5 className="product-title">
   Kids Headphone bulk 10 Pack Muticolored For Students
   </h5>
   <ReactStars count={5} size={24} value="3" edit={false} activeColors="#ffd700" />
   <p className={`d-none${grid===12 ? "description":""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quos eius est enim molestias ducimus? Dolorum laboriosam quo molestias deserunt,
     nostrum cumque tempore quibusdam, quas omnis modi aliquam optio sunt fuga.</p>
   <p className="price">$100.00</p>
   </div>
   <div className="action-bar position-absolute">
   <div className="d-flex flex-column gap-10">
      <button className='border-0 bg-transparent'>
   <img src={prodcompare} alt="prodcompare" />
   </button>
      <button className='border-0 bg-transparent'>
   <img src={view} alt="addcart" />
   </button>
      <button className='border-0 bg-transparent'>
   <img src={addcart} alt="addcart" />
   </button>
   </div>
   </div>
   </NavLink>
   </div>
   <div className={`${location.pathname==='/product' ? `gr-${grid}` :"col-3" }`}>
   <NavLink to={`${location.pathname==='/' ? 'product/:id' : ":id"}`} className="product-card position-relative">
   <div className="wishlist-icon position-absolute">
   <img src="images/wish.svg" alt="wishlist" />
   </div>
   <div className="product-image">
   <img src={watch}  alt="watch" className=' img-fluid' />
   <img src={watch2}  alt="watch"  className=' img-fluid change'/>
   </div>
   <div className="product-details">
   <h6 className="brand">Havels</h6>
   <h5 className="product-title">
   Kids Headphone bulk 10 Pack Muticolored For Students
   </h5>
   <ReactStars count={5} size={24} value="3" edit={false} activeColors="#ffd700" />
   <p className={`d-none${grid===12 ? "description":""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Quos eius est enim molestias ducimus? Dolorum laboriosam quo molestias deserunt,
    nostrum cumque tempore quibusdam, quas omnis modi aliquam optio sunt fuga.</p>
   <p className="price">$100.00</p>
   </div>
   <div className="action-bar position-absolute">
   <div className="d-flex flex-column gap-10">
   <NavLink to="/">
   <img src={prodcompare} alt="prodcompare" />
   </NavLink>
   <NavLink to="/">
   <img src={view} alt="addcart" />
   </NavLink>
   <NavLink to="/">
   <img src={addcart} alt="addcart" />
   </NavLink>
   </div>
   </div>
   </NavLink>
   </div>
   </>
    
  )
}

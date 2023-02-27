import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import '../Style/Header.css'
import compare from '../images/compare.svg';
import wishlist from '../images/wishlist.svg';
import user from "../images/user.svg";
import cart from '../images/cart.svg';
import menu from "../images/menu.svg"

export default function Header() {
  return (
    <>
    <header className="header-top-strip py-3">
    <div className="container-xxl">
    <div className="row">
    <div className="col-6">
    <p className='text-white mb-0'>Free Shopping Over $100 and free Return </p>
    </div>
    <div className="col-6">
    <p className="text-end text-white mb-0">
    HotLine:
    <a href='tel:+91 9876543211' className='text-white'>+91 9876543211</a>
    </p>
    </div>
    </div>
    </div>
    
    </header>
     <header className="header-upper py-3">
     <div className="container-xxl">
     <div className="row align-item-center">
     <div className="col-2">
     <h2>
    <Link to="/" className='text-white'>Developer</Link>
     </h2></div>
     <div className="col-5 ">
    
     <div className="input-group">
  <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..."
   aria-describedby="basic-addon2" />
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6 ' /></span> 
</div>
     
     
     </div>
     <div className="col-5 ">
     <div className="header-upper-link d-flex align-item-center justify-content-between ">
     <div>
     <Link to="/compare-product" className='d-flex align-items-center gap-10 text-white'>
     <img src={compare} alt='Compare'  />
     <p>Compare <br/> Product</p>
     </Link>
     </div>
     <div>
     <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'>
     <img src={wishlist}   alt='wishlist'  />
     <p>Favourite <br/> Wishlist</p>
     </Link>
     </div>
     <div>
     <Link to="/login" className='d-flex align-items-center gap-10 text-white'>
     <img src={user}  alt='user'  />
     <p>Login <br />Account</p>
     </Link>
     </div>
     <div>
     <Link to="/cart" className='d-flex align-items-center gap-10 text-white mt-2'>
     <img src={cart} alt='cart'  />
       <div className="d-flex flex-column">
       <span className="badge bg-white text-dark">
       0</span>
       </div>
     </Link>
     </div>
     </div>
     
     </div>
     </div>
     </div>
     </header>

     <header className="header-bottom py-3">
     <div className="row">

   <div className="col-2 dr">
   <img src={menu} alt="menu" />
   <select className="dropd border-0 text-white">
   <option value="1"><NavLink to="/">option1</NavLink></option>
   <option value="2"><NavLink to="/">option2</NavLink></option>
   <option value="3"><NavLink to="/">option3</NavLink></option>
   <option value="4"><NavLink to="/">option4</NavLink></option>
   </select>
    </div>
     
     <div className="col-10">
     <div className="menu-bottom d-flex lalign-item-center gap-30">
     <div>

   </div>
     <div className="menu-links">
     <div className="d-flex align-item-center gap-15 ">
     <NavLink className="text-white pl-5" to="/">Home</NavLink>
     <NavLink className="text-white pl-5" to="/product"> OurStore</NavLink>
     <NavLink className="text-white pl-5" to="/blogs">Blogs</NavLink>
     <NavLink className="text-white pl-5" to="/contact">Contact</NavLink>
     </div>
     </div>
     </div>
     </div>
     
     </div>
     
     </header>

    </>
  )
}

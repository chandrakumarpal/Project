import React from 'react'
import '../Style/Footer.css'
import { NavLink } from 'react-router-dom'
import newsletter from '../images/newsletter.png'
import {BsYoutube,BsTwitter,BsFacebook,BsLinkedin,BsGithub} from 'react-icons/bs';
export default function Footer() {
  return (
   <>
   <footer className='py-4'>
   <div className="container-xxl">
   <div className="row">
   <div className="col-5">
   <div className="footer-top-data d-flex align-item-center gap-30">
   <img src={newsletter} alt="newsletter"/>
   <h2 className='text-white'>Sign Up for NewsLetter</h2>
   </div>
   </div>
   <div className="col-7">
   <div className="input-group">
   <input type="text" className="form-control py-1" placeholder="Your Email Address ...." aria-label="Your Email Address ...."
    aria-describedby="basic-addon2" />
   <span className="input-group-text p-3 buttfoot" >Subscribe Now!</span> 
 </div>
   </div>
   </div>
   </div>
   </footer>
   <footer className='py-3'>
   <div className="container-xxl">
   <div className="row text-white">
   <div className="col-4">
   <h4>Contact Us</h4>
   <div className='text-white'>
   <address>
   Varanasi , Uttar Pradesh<br/>
   Pincode: 221005 (IND)
   
   </address>
   <NavLink to="tel:- +91 9876543211"className="mt-4 d-flex align-item-center text-white">+91 9876543211</NavLink>
   <NavLink to="mail:- chandra@gmail.com"className=" d-flex align-item-center text-white">chandra@gmail.com</NavLink>
   <div className="socialicon ">
   <NavLink to="/"className='m-2 text-white mt-3'><BsYoutube /></NavLink>
   <NavLink to="/"className='m-2 text-white mt-3'><BsFacebook /></NavLink>
   <NavLink to="/"className='m-2 text-white mt-3'><BsGithub  /></NavLink>
   <NavLink to="/"className='m-2 text-white mt-3'><BsLinkedin /></NavLink>
   <NavLink to="/"className='m-2 text-white mt-3'><BsTwitter/></NavLink>
   </div>
   </div>
   </div>
   <div className="col-3">
   <h4>Information</h4>
   <div  className='footerlinks d-flex flex-column'>
   <NavLink className="py-2 mb-1 text-white" to="/Privacy-Policy">Privacy Policy</NavLink>
   <NavLink className="py-2 mb-1 text-white" to="/Refund-Policy">Refund Policy</NavLink>
   <NavLink className="py-2 mb-1 text-white" to="/Shipping-Policy">Shiping Policy</NavLink>
   <NavLink className="py-2 mb-1 text-white" to="/Term&Condition">Terms & Conditions</NavLink>
   <NavLink className="py-2 mb-1 text-white" to="/blogs">Blogs</NavLink>
  
   </div>
   </div>
   <div className="col-3">
   <h4>Account</h4>
   <div  className='footerlinks d-flex flex-column'>
   <NavLink className="py-2 mb-1 text-white" to="/">About us</NavLink>
   <NavLink className="py-2 mb-1 text-white" to="/">FAQ</NavLink>
   <NavLink className="py-2 mb-1 text-white" to="/contact">Contact</NavLink>
   </div>
   </div>
   <div className="col-2">
   <h4>Quick Links</h4>
   <div className='footerlinks d-flex flex-column'>
   <NavLink className="py-2 mb-1 text-white" to="/">Laptop</NavLink>
   <NavLink className="py-2 mb-1 text-white" to="/">Headphones</NavLink>
   <NavLink className="py-2 mb-1 text-white" to="/">Tablet</NavLink>
   <NavLink className="py-2 mb-1 text-white" to="/">Watch</NavLink>
   
   
   </div>
   </div>
   </div>
   </div>
   </footer>
   <footer className='py-3 lastfooter'>
   <div className="row">
   <div className="col-12">
   <div className="text-center text-white ">&copy;{new Date().getFullYear()}: Powered by Chandra</div>
   </div>
   </div>
   </footer>
   </>
  )
}

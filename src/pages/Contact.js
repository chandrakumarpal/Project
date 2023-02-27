import React from 'react'
import Meta from '../component/Meta'
import BreadCrumb from '../component/BreadCrumb'
import '../Style/Contact.css'
import {AiOutlineHome,AiOutlineMail,AiOutlineInfoCircle} from "react-icons/ai"
import {BiPhoneCall} from 'react-icons/bi'
import Container from '../component/Container'
export default function Contact() {

  return (
   <>
   <Meta title={"Contact Us"} />
        <BreadCrumb title="Contact Us" />
        <Container class1="contact-wrapper py-5 home-wrapper-2">
        
        <div className="row">
        <div className="col-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d237746.10077339725!2d83.00944337883142!3d25.235905485753698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676343499737!5m2!1sen!2sin"
         width="600" height="450" style={{border:"0",width:"100%"}} allowfullscreen="" loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade"  />
        </div>
        <div className="col-12 mt-5">
        <div className="contact-inner-wrapper d-flex justify-content-between">
        <div>
          <h3 className="contact-title mb-4">Contact </h3>
          <form className='d-flex flex-column gap-15'>
          <div>
           <input type="text"  className='form-controle w-100' placeholder='name'/>
          </div>
          <div>
          <input type="email"  className='form-controle w-100' placeholder='email'/>
         </div>
         <div>
         <input type="number"  className='form-controle w-100' placeholder='mobile'/>
        </div>
        <div>
        <textarea name="" id="" cols="30" rows="4" className='w-100 form-controle' placeholder='comment'></textarea></div>
          <div><button className="button border-0">
          Submit
          </button></div>
          </form>
        </div>
        <div>
          <h3 className="contact-title">Get in Touch With Us</h3>
          <div>
            <ul className="ps-0 mt-3">
            <li className='mb-3 d-flex gap-15 ign-items-center'><AiOutlineHome className='fs-5'/>
            <address className='mb-0'>Village - Bachchhaon , Post -Bachchhaon ,221011 ,Varanasi Uttar Pradesh</address>
            </li>
            <li className='mb-3  d-flex gap-15 ign-items-center'><BiPhoneCall  className='fs-5'/>
            <a href="+91 9876543211">+91 9876543211</a>
            </li>
            <li className='mb-3  d-flex gap-15 ign-items-center'><AiOutlineMail   className='fs-5'/>
            <a href="mail to:chandra@gmail.com">chandra@gmail.com</a></li>
         
            <li className='mb-3  d-flex gap-15 ign-items-center'><AiOutlineInfoCircle  className='fs-5' />
            <p className="mb-0">Mon To Fri : 10:00 Am To 8:00 Pm</p></li>
            </ul>
          </div>
        </div>
        </div>
        </div>
        </div>
   
        
        </Container>
   
   </>
  )
}

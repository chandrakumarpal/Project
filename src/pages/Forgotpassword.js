import React from 'react'
import Meta from '../component/Meta'
import BreadCrumb from '../component/BreadCrumb';
import '../Style/Login.css'
import { NavLink } from 'react-router-dom';
import Container from '../component/Container';
import CustomInput from '../component/CustomInput';
export default function Forgotpassword() {
  return (
    <>
    <Meta title={"ForgotPassword"} />
    <BreadCrumb title="ForgotPassword" />
    <Container class1="forgot-password home-wrapper-2 py-5">
        
            <div className="row">
            <div className="col-12">
            <h3 className='text-center'>Reset Your Password</h3>
            <p className="text-center py-3">We Will Send an Email To reset Your Password</p>
            <div className="forgot-card">
            <form action="">
            <CustomInput type="password" className='form-control' placeholder="password" />
          
            <div className='mt-5'>
   
   <div className=" mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
   <button className="button">Submit</button>
   <NavLink className='cancel mt-2' to="/Login">Cancel?</NavLink>
   </div>
    </div>
            </form>
            </div>
            </div>
            </div>
      
    </Container>

    </>
  )
}

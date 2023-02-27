import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import Container from '../component/Container'
import CustomInput from '../component/CustomInput'
export default function Signup() {
  return (
    <>
    <Meta title={"Sign UP"} />
    <BreadCrumb title="SignUp " />
    <Container class1="signup-wrapper py-5 home-wrapper-2">

      <div className="row">
        <div className="col-12">
        <div className="signup-inner">
        <h3 className='text-center pb-5'>Sign UP</h3>
        <form action="" className='d-flex flex-column gap-15'>
        <CustomInput type="name" placeholder='name' 
        className='form-control' name='name' />
        <CustomInput type="tel" placeholder='Mobile No' 
        className='form-control' name="number" />
        <CustomInput type="email" placeholder='email' className='form-control'
        name="email" />
        <CustomInput type="password" placeholder='password' className='form-control'
        name="password" />
      
        <div className='d-flex justify-content-end'>
        <button className="button mt-3">Submit Now </button>
        </div>
        </form>
        </div></div>
      </div>
    </Container>
  
    </>
  )
}

import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import '../Style/Login.css'
import Container from '../component/Container'
import CustomInput from '../component/CustomInput'
export default function ResetPassword() {
  return (
    <>
    <Meta title={"Reset Pass" } />
    <BreadCrumb title="ResetPass" />
    <Container class1="reset-wrapper home-wrapper-2 py-2">
   
        <div className="row">
            <div className="col-12">
            <div className="reset-inner ">
            <h3 className='text-center pb-3'>Reset Password</h3>
            <div className='pb-3'>
            <CustomInput type="password" name="password" placeholder='Password' className='form-control' />
            </div>
            <div className='pb-3'>
            <CustomInput type="password" name=" confpassword" placeholder='confirm Password' className='form-control' />
            
            </div>
            <div className='d-flex justify-content-end'>
            <button className="button mt-3">Ok</button>
            </div>
            </div>
            </div>
        </div>
 
    </Container>
    </>
  )
}

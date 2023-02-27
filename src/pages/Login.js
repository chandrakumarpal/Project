import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import { NavLink } from 'react-router-dom'
import '../Style/Login.css'
import Container from '../component/Container'
import CustomInput from '../component/CustomInput'
export default function Login() {
  return (
    <>
    <Meta title={"Login"} />
    <BreadCrumb title="Login" />
<Container class1="login-wrapper home-wrapper-2 py-5">

<div className="row">
    <div className="col-12">
    <div className="auth-card">
    <h3 className='text-center mb-3'>Login</h3>
    <form action="" className='d-flex gap-20 flex-column'>
    <div className='mt-3'>
    <CustomInput type="email" name='email' placeholder='email' className='form-control' />
    </div>
    <div className='mt-3'>
    <CustomInput type="password" name='password' placeholder='password'  className='form-control' />
    </div>
    <div>
    <NavLink to="/forgotpassword" className="forgotpass">forgotpassword?</NavLink>
   <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
   <button className="button border border-none">Login</button>
   <NavLink className='button SignUP' to="/SignUp">Sign UP</NavLink>
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

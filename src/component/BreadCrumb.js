import React from 'react'

import { NavLink } from 'react-router-dom';
export default function BreadCrumb(props) {
    const {title} =props;
  return (
    <>
    <div className="breadcrumb py-4  mb-0">
    <div className="container-xxl ">
    <div className="row">
    <div className="col-12">
    <p className=' text-center  mb-0'><NavLink to="/" className="text-dark">Home &nbsp;</NavLink>/ {title}</p>
    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

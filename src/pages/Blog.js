import React from 'react'
import Meta from '../component/Meta'

import BreadCrumb from '../component/BreadCrumb'
import BlogCard from './BlogCard'
import Container from '../component/Container'
export default function Blog() {
  return (
        <>
        <Meta title={"BLogs"} />
        <BreadCrumb title="Blogs" />
        <Container class1="blog-wrapper home-wrapper-2">
  
        <div className="row">
        <div className="col-3">
        
        <div className="filter-card mb-3">
   <h3 className="filter-title">
   Find By Categories
   </h3>
   <div>
    <ul className='ps-0'>
      <li>Watch</li>
      <li>Tv</li>
      <li>Camera</li>
      <li>Laptop</li>
    </ul>
   </div>
   </div>
        
        
        </div>
        <div className="col-9">
        <div className="d-flex gap-10 mb-5 mt-3">
        <div className="row">
        <div className="col-6"><BlogCard /></div>
        <div className="col-6"><BlogCard /></div>
        </div>
        
        </div>
        <div className="row mb-5">
        <div className="col-6"><BlogCard /></div>
        <div className="col-6"><BlogCard /></div>
        </div>
        </div>
        </div>
        </Container>
 
        </>
  )
}

import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import '../Style/BlogCard.css'
import { NavLink } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import blog1 from "../images/blog_1.jpg"
import Container from '../component/Container'
export default function SingleBlog() {
  return (
    <>
    <Meta title={"Dynamic Blog Name"} />
    <BreadCrumb title="Dynamic Blog Name" />
    <Container class1="blog-wrapper home-wrapper-2">
 
        <div className="row">
        <div className="col-12">
        <div className="single-blog-card">
        
        <NavLink to="/blogs" className='d-flex align-items-center'><BsArrowLeft className='fs-4' />Go to Blogs</NavLink>
        <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
        </div>
     <img src={blog1} alt="blog-1" className='img-fluid w-100 my-4' />
        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Repudiandae, in. Corrupti vel, tenetur, quas unde quo consectetur repellat
         velit est excepturi numquam facere eligendi officiis rem ad libero quisquam 
         quam nesciunt amet temporibus iste, ipsum enim modi optio? Obcaecati minus 
         explicabo tempore in corrupti sunt, error neque quasi, eos, perspiciatis laboriosam?
          Maxime, est voluptatibus eos officia dolore rerum minima tempore?</p>
        </div>
     
        </div>
     
        </Container>
    </>
  )
}

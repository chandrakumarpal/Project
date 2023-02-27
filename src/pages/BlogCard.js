import React from 'react'
import '../Style/BlogCard.css'
import { NavLink } from 'react-router-dom'
import blogs from "../images/blog_1.jpg"
export default function BlogCard() {
  return (
    <>
  
    <div className="blog-card">
    <div className="card-image">
    <img src={blogs} alt="blog" className='img-fluid w-100'/>
    </div>
    <div className="blog-content">
    <p className='date'>{new Date().toLocaleDateString()}</p>
    <h5 className='title text-center'>A Beautiful Sunday Morning 
    </h5>
    <p className="desc  text-center">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit mollitia ullam optio culpa cum odit.
    </p><NavLink className="button" to="/blog/:id">Read More</NavLink>
    </div>
    </div>
   
    </>
  )
}

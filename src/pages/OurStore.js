import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import '../Style/OurStore.css'
import Color from './Color'
import ProductContent from './ProductContent'

import watch from "../images/watch.jpg"
import gr4 from "../images/gr4.svg"
import gr3 from "../images/gr3.svg"
import gr2 from "../images/gr2.svg"
import gr1 from "../images/gr.svg"
import Container from '../component/Container'

export default function OurStore() {
  const [grid,setgrid]=useState(4);
     
  return (
   <>
   <Meta title="Our Store" />
   <BreadCrumb title="our store" />
   <Container class1="store-wrpper py-5 home-wrapper-2">
 
   <div className="row">
   <div className="col-3">
   <div className="filter-card mb-3">
   <h3 className="filter-title">
   Shop By Categories
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
   <div className="filter-card mb-3">
   <h3 className="filter-title">
   Filter by
   </h3>
   <div>
   <h5 className="sub-title">Availibility</h5>
   <div className="form-check">
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
   <label className="form-check-label" htmlFor="flexCheckDefault">
     Stock In
   </label>
 </div>
 <div className="form-check"> 
   <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
   <label className="form-check-label" htmlFor="flexCheckChecked">
     Out of Stock -{0}
   </label>
 </div>
 <h5 className="sub-title">Price</h5>
<div className='d-flex align-items-center gap-15'>
<div className="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="From" />
  <label htmlFor="floatingInput">From</label>
</div>
<div className="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="To" />
  <label htmlFor="floatingInput">To</label>
</div>
</div>
<h5 className="sub-title">color </h5>
<div>
  <div className="d-flex flex-wrap">
  

<Color />


  </div>
</div>
<h5 className="sub-title">size </h5>

<div className="form-check">
<input className="form-check-input" type="checkbox" value="" id="s1" />
<label className="form-check-label" htmlFor="s1">
  s{1}
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="checkbox" value="" id="s2" />
<label className="form-check-label" htmlFor="s2">
 s{2}
</label>
</div>

   </div>
   </div>
   <div className="filter-card mb-3">
   <h3 className="filter-title">
   Product Tags
   </h3>
 
   <div className="product-tags d-flex flex-wrap align-items-center gap-10">
   <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
   Headphones
   </span>
   <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
   Laptop
   </span>
   <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
   Mobile
   </span>
   
   <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
   wireless
   </span>
   
   <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
bluetooth   </span>
   
   
   </div></div>
   <div className="filter-card mb-3">
   <h3 className="filter-title">
 Random Product
   </h3>
<div>  
  <div className="random-products mb-3 d-flex">
  <div className="w-50">
  <img src={watch} alt="watch" className='img-fluid'/>
  </div>
  <div className="w-50">
    <h5>Kids headphones bulk 10 Pack multicored for students</h5>
    <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700" />
    <b>$300</b>
  </div>
  </div>
   <div className="random-products mb-3 d-flex">
  <div className="w-50">
  <img src={watch} alt="watch" className='img-fluid'/>
  </div>
  <div className="w-50">
    <h5>Kids headphones bulk 10 Pack multicored for students</h5>
    <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700" />
    <b>$300</b>
  </div>

  </div>
</div>
   </div>

   </div>
   <div className="col-9">
   <div className="filter-sort-grid mb-4">
   <div className="d-flex justify-content-between gap-10">
   <div className="d-flex align-items-center gap-10">
   <p className="mb-0 " style={{width:"100px"}}>Sort By:</p>
   <select name="" className='form-control form-select' id=" " defaultValue={"DEFAULT"}>
   <option value="manual" >Featured</option>
   <option value='best-selling' selected="selected">Best Selling</option>
   <option value="title-ascending">Alphabetically ,A-z</option>
   <option value="title-descending">Alphabetically ,z-A</option>
   <option value="price-ascending">Price,low to high</option>
   <option value="price-descending">Price ,high to low</option>
   <option value="creation-ascending">date, old to new </option>
   <option value="creation-descending">date,new to old  </option>
   </select>
   </div>
   <div className="d-flex align-items-center gap-10">
    <p className="totalproducts">21 Products</p>
<div className="d-flex gap-10 align-items-center grid mb-0">

<img src={gr4} className="d-block img-fluid" alt="gr" onClick={()=>{setgrid(3)}} />
<img src={gr3} className="d-block img-fluid" alt="gr" onClick={()=>{setgrid(4)}} />
<img src={gr2} className="d-block img-fluid" alt="gr" onClick={()=>{setgrid(6)}} />
<img src={gr1} className='d-block img-fluid' alt="gr" onClick={()=>{setgrid(12)}} />
</div>

   </div>
   </div>
   </div>
   <div className="products-list pb-5">
   <div className="d-flex gap-10 flex-wrap">
   <ProductContent grid={grid}/>
   </div>
   </div>
   </div>
   </div>
  
   </Container>
   </>
  )
}

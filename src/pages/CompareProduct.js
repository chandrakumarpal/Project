import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import '../Style/Compare.css'
import Color from './Color'
import cross from "../images/cross.svg";
import watch  from "../images/watch.jpg"
import Container from '../component/Container'
export default function CompareProduct() {
  return (
    <>
    <Meta title="Compare Product" />
    <BreadCrumb title="Compare Product" />
   
    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
    <div className="row">
    <div className="col-3">
    <div className="compare-product-card">
    <div className="product-card-image position-relative">
    <img src={cross} alt="cross" className="cross position-absolute img-fluid" />
    <img src={watch} alt="watch" /></div>
    <div className="compare-product-detail">
     <h5 className='title'>
     Honor T1 7.0.1 6 GB RAM 64GB ROM  7 inch Super Amoled Display

     </h5>
          
 <h6 className="price mt-3">$100</h6>
 <div>
    <div className="product-detail">
        <h5>
            Brands
        </h5>
        <p>Havels</p>
    </div>
    <div className="product-detail">
    <h5>
        Type
    </h5>
    <p>Watch</p>
</div>
<div className="product-detail">
<h5>
    Availibilty
</h5>
<p>In Stock</p>
</div>
<div className="product-detail">
<h5>
    colors
</h5>
<Color />
</div>
<div className="product-detail">
<h5>
    Size
</h5>
<div className="d-flex gap-10">
<p>S</p>
<p>M</p>
</div>
</div>
 </div>
    </div>
</div>
    </div>
    <div className="col-3">
    <div className="compare-product-card">
    <div className="product-card-image position-relative">
    <img src={cross} alt="cross" className="cross position-absolute img-fluid" />
    <img src={watch} alt="watch" /></div>
    <div className="compare-product-detail">
     <h5 className='title'>
     Honor T1 7.0.1 6 GB RAM 64GB ROM  7 inch Super Amoled Display

     </h5>
          
 <h6 className="price mt-3">$100</h6>
 <div>
    <div className="product-detail">
        <h5>
            Brands
        </h5>
        <p>Havels</p>
    </div>
    <div className="product-detail">
    <h5>
        Type
    </h5>
    <p>Watch</p>
</div>
<div className="product-detail">
<h5>
    Availibilty
</h5>
<p>In Stock</p>
</div>
<div className="product-detail">
<h5>
    colors
</h5>
<Color />
</div>
<div className="product-detail">
<h5>
    Size
</h5>
<div className="d-flex gap-10">
<p>S</p>
<p>M</p>
</div>
</div>
 </div>
    </div>
</div>
    </div>  
    <div className="col-3"></div>
    <div className="col-3"></div>
    </div>
    </Container>
    
    </>
  )
}

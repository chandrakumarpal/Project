import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Style/Home.css'
import Marquee from 'react-fast-marquee';
import BlogCard from './BlogCard';
import ProductContent from './ProductContent';
import SpecialProduct from './SpecialProduct';
import PopularProduct from './PopularProduct';
import Famous from './Famous';
import Meta from '../component/Meta';

import main_banner from "../images/main-banner.jpg"
import cat_banner1 from "../images/catbanner-01.jpg"
import cat_banner3 from "../images/catbanner-03.jpg"
import cat_banner2 from "../images/catbanner-02.jpg"
import cat_banner4 from "../images/catbanner-04.jpg"

import brand1 from "../images/brand-01.png"
import brand2 from "../images/brand-02.png"
import brand3 from "../images/brand-03.png"
import brand4 from "../images/brand-04.png"
import brand5 from "../images/brand-05.png"
import brand6 from "../images/brand-06.png"
import brand7 from "../images/brand-07.png"
import brand8 from "../images/brand-08.png"
import Container from '../component/Container';
import { services } from '../utilies/Data';

export default function Home() {
  return (<>
      <Container class1="home-wrapper-1 py-3">
      <div className="row">
      <div className="col-6">
     <div className="main-banner   position-relative">
     <img src={main_banner} alt="main-banner" className='w-100' />
     <div className="main-banner-content position-absolute ">
     <h4>SUPERCHARGED FOR PROS</h4>
     <h5> i Pad S13+ Pro</h5>
     <p>From $999.00 or $41.00/mo</p>
     <NavLink to="/" className='button'>Buy Now</NavLink>
     </div>
     </div>
      
      </div>
      <div className="col-6">
      <div className="d-flex pb-3 justify-content-between align-items-center">
      <div className="small-banner position-relative">
      <img src={cat_banner1} alt="main-banner"  />
      <div className="small-banner-content position-absolute ">
      <h4>BEST SALE</h4>
      <h5> Laptop Max</h5>
      <p>From $699.00 or<br/> $34.00/mo</p>
    
      </div>
      </div>
     
     
      <div className="small-banner position-relative">
      <img src={cat_banner3} alt="main-banner"  />
      <div className="small-banner-content position-absolute ">
      <h4>NEW ARRIVAL</h4>
      <h5> Buy IPad Air</h5>
      <p>From $159.00 or<br/> $10.00/mo</p>
    
      </div>
      </div>
      </div>
      <div className="d-flex  py-3 justify-content-between align-items-center">
      <div className="small-banner  position-relative" >
      <img src={cat_banner2} alt="main-banner"   />
      <div className="small-banner-content position-absolute ">
      <h4>15% OFF</h4>
      <h5> SmartWatch  7</h5>
      <p>From $299.00 or <br/>$15.00/mo</p>
    
      </div>
      </div>
      <div className="small-banner  position-relative">
      <img src={cat_banner4} alt="main-banner" />
      <div className="small-banner-content position-absolute ">
      <h4>FREE DELIVERY</h4>
      <h5>AirPods MAx</h5>
      <p>From $199.00 or<br/> $11.00/mo</p>
    
      </div>
      </div>
      </div>
      </div>
      
      </div>  
      </Container>

    <Container class1="home-wrapper-2 py-5">
    <div className="row">
    <div className="col-12">
    <div className="services d-flex align-items-center justify-content-between">
   
      
    {
      services.map((i,j)=>{
        return(
<>
<div className='d-flex align-items-center gap-15 mb-0' key={j}>
<img src={i.image} alt="services" />
<div>
<h6>{i.title}</h6>
<p className='mb-0'>{i.tagline}</p>
</div>
</div>
</>

        )
      })
    }
 
    </div>
    </div>
    </div>
    </Container>
   
    <Container class1="home-wrapper-2 py-5 d-flex">
    
    <div className="row">
    <div className="col-12">
    <div className="categories d-flex align-items-center justify-content-between flex-wrap">
    <div className='d-flex align-items-center '>
    <div>
    <h6>Camera</h6>
    <p>10 items</p>
    </div>
    <img src="images/camera.jpg" alt="camera" />
    </div>
    <div className='d-flex align-items-center '>
    <div>
    <h6>Music & Gaming</h6>
    <p>10 items</p>
    </div>
    <img src="images/camera.jpg" alt="camera" />
    </div>
    <div className='d-flex align-items-center '>
    <div>
    <h6>Smart Tv</h6>
    <p>10 items</p>
    </div>
    <img src="images/tv.jpg" alt="tv" />
    </div>
    <div className='d-flex align-items-center '>
    <div>
    <h6>Smart Watches</h6>
    <p>10 items</p>
    </div>
    <img src="images/headphone.jpg" alt="headphone" />
    </div>
    <div className='d-flex align-items-center '>
    <div>
    <h6>Camera</h6>
    <p>10 items</p>
    </div>
    <img src="images/camera.jpg" alt="camera" />
    </div>
    <div className='d-flex align-items-center '>
    <div>
    <h6>Music & Gaming</h6>
    <p>10 items</p>
    </div>
    <img src="images/camera.jpg" alt="camera" />
    </div>
    <div className='d-flex align-items-center '>
    <div>
    <h6>Smart Tv</h6>
    <p>10 items</p>
    </div>
    <img src="images/tv.jpg" alt="tv" />
    </div>
    <div className='d-flex align-items-center '>
    <div>
    <h6>Smart Watches</h6>
    <p>10 items</p>
    </div>
    <img src="images/headphone.jpg" alt="headphone" />
    </div>
    </div>
    </div>
    </div>

    </Container>
  
<Container class1="Feature-wrapper py-5 home-wrapper-2">
<div className="row">
<div className="col-12">
<h3 className='section-heading'>Feautured collection</h3>
</div>
 <ProductContent />
 <ProductContent/>
 <ProductContent />
 <ProductContent />
</div>
</Container>
   
  <Container class1="famous-wrapper py-2 home-wrapper-2">
  <div className="row">
  <div className="col-12">
  <Famous />
 
  </div>
  </div>
  </Container>

  <Container class1="special-wrapper py-5 home-wrapper-2">
  
  <div className="row">
  <div className="col-12">
  <h3 className="section-heading">
  Special Products
  </h3>
  </div>
  <SpecialProduct />
  <SpecialProduct/>
  <SpecialProduct />
  </div>
  </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
    
    <div className="row">
    <div className="col-12 d-flex align-items-center justify-content-between">
    <h3 className='section-heading'>Our Popular Product</h3>
    
   
    </div>
   
    <PopularProduct/>
    <PopularProduct/>
    <PopularProduct/>
    <PopularProduct/>
    </div>
    
    </Container>
    <Container class1="marquee-wrapper ">
    
    <div className="row">
    <div className="col-12">
    <div className="marquee-inner-wrapper card-wrapper">
    <Marquee className='d-flex justify-content-between align-items-center'>
    <div className='mx-4 w-25'>
    <img src={brand1} alt="brand" />
    </div>
    <div className='mx-4 w-25'>
    <img src={brand2} alt="brand" />
    </div>
    <div className='mx-4 w-25'>
    <img src={brand3} alt="brand" />
    </div>
    <div className='mx-4 w-25'>
    <img src={brand4} alt="brand" />
    </div>
    <div className='mx-4 w-25'>
    <img src={brand5} alt="brand" />
    </div>
    <div className='mx-4 w-25'>
    <img src={brand6} alt="brand" />
    </div>
    <div className='mx-4 w-25'>
    <img src={brand7} alt="brand" />
    </div>
    <div className='mx-4 w-25'>
    <img src={brand8} alt="brand" />
    </div>
    </Marquee>
    </div>
    </div>
    </div>
   
    </Container>

   

    <Container class1="blog-wrapper py-5 home-wrapper-2">
   
    <div className="row">
    <div className="col-12">
    <h3 className='section-heading'>Our Latest Blogs</h3>
    </div>
  
<div className="row">
  <div className="col-3">
  <BlogCard />
  </div>
  <div className="col-3">
  <BlogCard />
  </div>
  <div className="col-3">
  <BlogCard />
  </div>
  <div className="col-3">
  <BlogCard />
  </div>
</div>

    </div>
  
    </Container>

    <Meta title="Home" />
    </>
  )
}

import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import '../Style/WishList.css'
import watch from "../images/watch.jpg" ;
import cross from "../images/cross.svg"
import Container from '../component/Container';
export default function WishList() {
  return (
   <>
   <Meta title={"WishList"} />
   <BreadCrumb title="WishList" />
   <Container class1="wishlist-wrapper home-wrapper-2 py-5">

    <div className="row">
        <div className="col-3 ">
        <div className="wishlist-card position-relative">
        <img src="images/cross.svg" alt="watch"  className='position-absolute img-fluid'/>
        <div className="wishlist-card-image">
        <img src={watch} alt="watch" />
        </div> </div>
       <div className="py-3">
       <h5 className="title p-3">Honor T1 6GB RAM 64 GB ROM Super Amoled Display </h5>
       <h6 className="price ps-3">$1000</h6>
       </div>
       
        </div>
        <div className="col-3 ">
        <div className="wishlist-card position-relative">
        <img src="images/cross.svg" alt="watch"  className='position-absolute img-fluid'/>
        <div className="wishlist-card-image">
        <img src={watch} alt="watch" />
        </div> </div>
       <div className="py-3">
       <h5 className="title p-3">Honor T1 6GB RAM 64 GB ROM Super Amoled Display </h5>
       <h6 className="price ps-3">$1000</h6>
       </div>
       
        </div>
        <div className="col-3 ">
        <div className="wishlist-card position-relative">
        <img src={cross} alt="watch"  className='position-absolute img-fluid'/>
        <div className="wishlist-card-image">
        <img src={watch} alt="watch" />
        </div> </div>
       <div className="py-3">
       <h5 className="title p-3">Honor T1 6GB RAM 64 GB ROM Super Amoled Display </h5>
       <h6 className="price ps-3">$1000</h6>
       </div>
       
        </div>
    </div>
   </Container>
   

   
   </>
  )
}

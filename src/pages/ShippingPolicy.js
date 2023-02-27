import React from 'react'
import Meta from '../component/Meta'
import BreadCrumb from '../component/BreadCrumb'
import Container from '../component/Container'
export default function ShippingPolicy() {
  return (
   <>
   <Meta title={"Shipping"} />
   <BreadCrumb title="Shipping" />
   <Container class1="policy-wrapper py-5 home-wrapper-2">
 
     <div className="row">
       <div className="col-12">
         <div className="policy"></div>
       </div>
     </div>
   
  </Container>

   </>
  )
}

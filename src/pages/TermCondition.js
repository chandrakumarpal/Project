import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Container from '../component/Container'
import Meta from '../component/Meta'

export default function TermCondition() {
  return (
    <>
    <Meta title={"Term&Condtion"} />
    <BreadCrumb title="Term&Condition" />
    <Container className="policy-wrapper py-5 home-wrapper-2">
   
      <div className="row">
        <div className="col-12">
          <div className="policy"></div>
        </div>
      </div>
    
   </Container>

    </>
  )
}


import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Container from '../component/Container'
import Meta from '../component/Meta'
import '../Style/Policy.css'
export default function PrivacyPolicy() {
  return (
    <>
    <Meta title={"Privacy"} />
    <BreadCrumb title="Privacy" />
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

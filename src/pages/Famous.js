import React from 'react'
import "../Style/Famous.css"
import famous from "../images/famous-1.webp"
import famous2 from "../images/famous-2.webp"
import famous3 from "../images/famous-3.webp"
import famous4 from "../images/famous-4.webp"
export default function Famous() {
  return (
   <>
      <div className="col-3 d-flex align-items-center justify-content-between gap-15">
      <div className="famous-card position-relative">
      <img src={famous} alt="famous" />
       <div className="famous-content position-absolute">
       <h5>Big Screen</h5>
       <h6>Smart Watch SEries 7</h6>
       <p> FRom $999 or $16.62/mo for  24mo...</p>
       </div>
      </div>

      <div className="famous-card position-relative">
      <img src={famous2} alt="famous" />
       <div className="famous-content position-absolute">
       <h5 className='text-dark'>Studio Display</h5>
       <h6 className='text-dark'>600 nits of Brightness</h6>
       <p className='text-dark'> 87-inch 5k Retina display...</p>
       </div>
      </div>
      

      <div className="famous-card   position-relative">
      <img src={famous3} alt="famous" />
       <div className="famous-content position-absolute">
       <h5 className='text-dark'>Smart Phone</h5>
       <h6 className='text-dark'>Smartphone 13 Pro</h6>
       <p className='text-dark'> No w in Green FRom $999 or $16.62/mo for  24mo...</p>
       </div>
      </div>

      <div className="famous-card position-relative">
      <img src={famous4} alt="famous" />
       <div className="famous-content position-absolute">
       <h5 className='text-dark'>Home Speaker</h5>
       <h6 className='text-dark'>Room Filing Sound</h6>
       <p className='text-dark'> FRom $399 or $6.62/mo for  24mo...</p>
       </div>
      </div>
      </div>

   </>
  )
}

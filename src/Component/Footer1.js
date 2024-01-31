import React from 'react'

export const Footer1 = () => {
  return (
    <div className='row text-dark'>
      <div className='col-lg-1 border border-primary text-center rrr' > <span className='align-middle'>hello</span></div>
      <div className='col-lg-3 border border-primary'><p className='text-center my-2 foot-color'>Last bill inv.no.111111 | Ammount : 300</p></div>
      <div className='col-lg-2 border border-primary'><p className='my-2 foot-color'>Total Qty : </p></div>
      <div className='col-lg-2 border border-primary'><p className='my-2 foot-color'>Total MRP : </p></div>
      <div className='col-lg-2 border border-primary'><p className='my-2 foot-color'>Total Discount :</p></div>
      <div className='col-lg-2 border border-primary'><p className='my-2 foot-color'>Total Bill : </p></div>
    </div>
  )
}

import React from 'react'

export const Footer1 = () => {
  return (
    <div>
      <div className='row text-dark'>
        
        <div className='col-lg-1  text-center wrapper'><button className='bg-warning'>history</button></div>
        <div className='col-lg-3 border border-primary'><p className='text-center my-2 foot-color'>Last bill inv.no.111111 | Ammount : 300</p></div>
        <div className='col-lg-2 border border-primary'><p className='my-2 foot-color'>Total Quantity : </p></div>
        <div className='col-lg-2 border border-primary'><p className='my-2 foot-color'>Total MRP : </p></div>
        <div className='col-lg-2 border border-primary'><p className='my-2 foot-color'>Total Discount :</p></div>
        <div className='col-lg-2 border border-primary'><p className='my-2 foot-color'>Total Bill : </p></div>
      </div>
    </div>
  )
}

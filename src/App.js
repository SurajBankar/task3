import React, { useState } from 'react'
import { ProductDetails } from './Component/ProductDetails'
import { CustomerDetails } from './Component/CustomerDetails'
import { Footer1 } from './Component/Footer1'
export const App = () => {
   

    const [total, settotal] = useState()
    const DataTransfer = (a) => {
        settotal(a)
    }

    return (
        <div className='container-fluid'>

            <div className='row'>
                <div className='col-lg-8 col-sm-8 col-12 border border-primary' style={{ wordWrap: "break-word" }}>
                    <ProductDetails
                        TransferFunction={DataTransfer}

                    ></ProductDetails>
                </div>

                <div className='col-lg-4 col-md-4 col-12 border border-secondary'>
                    <CustomerDetails
                        total={total}
                    ></CustomerDetails>
                </div>


            </div>

            <div className='row navbar navbar-expand-lg aaa'>
                <div className='col-lg-12 border border-secondary ABCD'>
                    <Footer1></Footer1>
                </div>
            </div>
           


        </div>
    )
}

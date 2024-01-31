import React, { useState } from 'react'
import ProductList from './ProductList.json'
export const ProductDetails = (props) => {
    const [total1, Settotal] = useState(0)
    const [gstAmmount1, SetgstAmmount] = useState(0)
    const [discount1, Setdiscount] = useState(0)
    const [qty1, Setqty] = useState(0)
    const [mrp1, Setmrp] = useState(0)
    const [SelectedProducts, SetSelectedProducts] = useState([])
    props.TransferFunction(total1)
    const addProduct = (q) => {
        Settotal(Number(total1) + (Number(ProductList[q.target.value].salePrice) * Number(ProductList[q.target.value].Quantity)))
        SetgstAmmount(Number(gstAmmount1) + ((Number(ProductList[q.target.value].salePrice) * Number(ProductList[q.target.value].gst)) / 100))
        Setdiscount(Number(discount1) + (Number(ProductList[q.target.value].mrp) - Number(ProductList[q.target.value].salePrice)))
        Setqty(Number(qty1) + Number(ProductList[q.target.value].Quantity))
        Setmrp(Number(mrp1) + Number(ProductList[q.target.value].mrp))
        SetSelectedProducts([...SelectedProducts, {
            id2: ProductList[q.target.value].id,
            name2: ProductList[q.target.value].name,
            mrp2: ProductList[q.target.value].mrp,
            SalePrice2: ProductList[q.target.value].salePrice,
            gstAmmount2: ((Number(ProductList[q.target.value].salePrice) * Number(ProductList[q.target.value].gst)) / 100),
            discount2: (Number(ProductList[q.target.value].mrp) - Number(ProductList[q.target.value].salePrice)),
            total2: (Number(ProductList[q.target.value].salePrice) * Number(ProductList[q.target.value].Quantity)),
            qty2: ProductList[q.target.value].Quantity,

        }])
    }
    return (
        <div className='text-center'>
            <p className='align-middle py-1 m-0'>Product Details</p>
            <select onChange={addProduct} className='w-100 text-center'>
                <option>select</option>
                {
                    ProductList.map((data, index) => (
                        <option value={index} >{data.name + "...." + data.salePrice}</option>
                    ))
                }
            </select>

            <table className='w-100'>
                <tr>
                    <td>SN</td>
                    <td>Product Name</td>
                    <td>Qty</td>
                    <td>MRP</td>
                    <td>Rate</td>
                    <td>Total</td>
                </tr>
                {
                    SelectedProducts.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.name2}</td>
                            <td>{data.qty2}</td>
                            <td>{data.mrp2}</td>
                            <td>{data.SalePrice2}</td>
                            <td>{data.total2}</td>
                        </tr>
                    ))
                }
            </table>






        </div>
    )
}

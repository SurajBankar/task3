import React, { useState } from 'react'
import CustometList from './CustomerList.json'
export const CustomerDetails = (props) => {
  const [name, SetName] = useState()
  const [Mobile, SetMobile] = useState()
  const [address, Setaddress] = useState()
  const AddCustomer = (q) => {
    SetName(CustometList[q.target.value].name)
    SetMobile(CustometList[q.target.value].mobile)
    Setaddress(CustometList[q.target.value].address)
  }
  var d = new Date()
  return (

    <div className='customer-details'>
      <p className='text-center py-1 m-0'>Customer Details</p>
      <select onChange={AddCustomer} className='w-100 mb-3' >
        <option>Select Customer</option>
        {
          CustometList.map((data, index) => (
            <option value={index}>{data.name}</option>
          ))
        }
      </select>
      <table border={1} className='w-100 border border-primary'>
        <tr >
          <td className='w-50'>Customer Name : </td>
          <td>{name}</td>

        </tr>
        <tr>
          <td>Mobile Number : </td>
          <td>{Mobile}</td>
        </tr>
        <tr>
          <td>Address : </td>
          <td>{address}</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>{d.toLocaleString()}</td>
        </tr>
        <tr>
          <td colSpan={2} className='text-center'>Payment Details</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <select className='w-100 text-center'>
              <option>Select</option>
              <option>Cash</option>
              <option>online</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Bill : </td>
          <td>{props.total}</td>
        </tr>
        <tr>
          <td colSpan={2} className='text-center'>Bill Details</td>
        </tr>
        <tr>
          <td>Total Bill : </td>
          <td>{Math.round(props.total)}</td>
        </tr>
        <tr className='text-center'>
          <td className='p-2'><button>Save</button></td>
          <td className='p-2'><button>Clear</button></td>
        </tr>

      </table>


    </div>
  )
}

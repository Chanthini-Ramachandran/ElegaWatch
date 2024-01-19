import React from 'react'
import './css/Checkout.css'
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { GiCardboardBox } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";

const Checkout = () => {
  return (
    <div className='checkout-container'>
        <div className='checkout-box'>
            <AiOutlineSafety/>
            <p>SAFE AND SECURE CHECKOUT</p>
        </div>
        <div className='checkout-box'>
            <MdOutlineWorkspacePremium/>
            <p>PREMIUM QUALITY PRODUCTS</p>
        </div>
        <div className='checkout-box'>
            <GiCardboardBox/>
            <p>7 DAY RETURN</p>
        </div>
        <div className='checkout-box'>
            <LiaShippingFastSolid/>
            <p>FREE SHIPPING NATIONWIDE</p>
        </div>
    </div>
  )
}

export default Checkout
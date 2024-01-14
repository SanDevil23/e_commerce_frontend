import React from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { useContext, props } from 'react'
import '../App'


const ShopCategory = () => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategory

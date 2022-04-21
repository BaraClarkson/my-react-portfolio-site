import React from 'react'
import '../productList/productList.css'
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>Create & inspire. It's Tonte</h1>
        <p className='pl-desc'>
        Tonte is a creative portfolio that your work has been waiting 
        beatiful homes, stunning portfolio styles & a whole lot more inside.
        </p>
      </div>
      <div className='pl-list'>
      {products.map(item=>(
        <Product key={item.id} img={item.img} link={item.link}/>
      ))} 
      </div>
    </div>
  )
}

export default ProductList
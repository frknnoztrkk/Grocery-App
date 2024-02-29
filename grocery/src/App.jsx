import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import { product } from './data'
import Product from './Component/Product'
import './css/Product.css';

function App() {
 

  return (
   <div>
      <Header/>
      <div className='product-main'>
        {
          product?.map((product) =>(
          <Product key={product.id} product={product}/>
         ))  
        }
      </div>
   </div>
  )
}

export default App

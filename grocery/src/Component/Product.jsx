import React from 'react'

function Product({product}) {
    const {id,title,price,image,description} = product;
  return (
    <div className='product'>
         <img src={image} width={220} height={150}/>
         <h4 className='title'>{title}</h4>
         <h5 className='course-desc'>{description}</h5>
         <h3 className='course-price'>{price +" "}₺</h3> 
    </div>
  )
}

export default Product
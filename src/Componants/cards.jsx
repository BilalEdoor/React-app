import React from 'react'

const cards = ({product}) => {
  console.log(product);
  return (
    <div className='w-72 mt-5 bg-[#dedddd]'>
<img src="{product.img}" alt="camera"
className='w-full rounded-lg'
/>
<div>
  <div className='flex items-center justify-between my-4'>
    <span className='font-bold text-lg'>{product.name}</span>
    <span className='text-red-500'>{product.price}$</span>
  </div>
  <div>
   {
    product.description
   }
  </div>
</div>
    </div>
  )
}

export default cards
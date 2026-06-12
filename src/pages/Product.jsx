import React from 'react'
import { FaStar } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Product = () => {
  return (
<>
    <div className='p-10 grid grid-cols-4 gap-5'>
      <div className="h-96 w-96 px-3 border rounded">
        <div>
           <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" className='h-40 w-full object-contain' />
        </div>
           <div className='m-2 font-medium' >
              <h3>Fjallraven - Foldsack No. 1 Backpack, Laptops</h3>
           </div>
           <div className='flex flex-row items-center px-3.5 gap-1 font-medium'>
                  <h2> 3.9 </h2>
                  <FaStar className='text-yellow-300' />
                   <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar  />
                    <FaStar />
                    <h3>(140)</h3>
           </div>
           <div className='flex flex-row items-center px-3.5 gap-1 font-medium' >
           <LiaRupeeSignSolid className='font-medium'/>
             <h2>109.96</h2>
           </div>
           <div className='px-3 '>
            Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
           </div>
           <div className='m-2 h-10 w-85 bg-amber-400 flex items-center justify-center font-medium border rounded'> 
              ADD TO CART KRO
          </div>
      </div>

      
    </div>
</>
  )
}

export default Product;



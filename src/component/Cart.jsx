import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ cartItems }) => {
  return (
    <div className='w-full bg-gray-500 flex justify-between p-4'>
      <div className='text-md flex flex-col text-amber-500 font-bold'>I Can Do it</div>
      <div className='flex flex-row gap-4 mr-4 outline-none decoration-slate-500'>
        <span className='text-white font-bold cursor-pointer'>Fav</span>
        <span className='text-white font-bold cursor-pointer'>Profile</span>
        <span className='text-gray-200 font-bold cursor-pointer my-2'>
          <FaShoppingCart size={25} />
          <span className='ml-2 text-red-600 '>{cartItems.length}</span> {/* Show number of items in the cart */}
        </span>
      </div>
    </div>
  );
};

export default Cart;

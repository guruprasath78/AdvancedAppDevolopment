import React from 'react';
import './cart.css'

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handlrCartClearance}) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className='cart-items'>
      <h2 className='cart-items-header'>Cart Items</h2>
      <div className='clear-cart'>
        {cartItems.length >=1 && (
            <button className='clear-cart-button' onClick={handlrCartClearance}>Clear Cart</button>
        )}
      </div>
      {(!cartItems || cartItems.length === 0) && (
        <div className='cart-items-empty'>No items are added.</div>
      )}

      {Array.isArray(cartItems) && (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className='cart-item-list'>
              <img
                className='cart-items-image'
                src={item.image}
                alt={item.name}
              />
              <div className='cart-items-name'>{item.name}</div>
              <div className='cart-items-function'>
                <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
              </div>
              <div className='cart-items-price'>{item.quantity} * ₹ {item.price}</div>
            </div>

          ))}
        </div>
      )}
      <div className='cart-items-total-price-name'>
        Total Price
        <div className='cart-items-total-price'>
        ₹{totalPrice}
        </div>
      </div>
    </div>
  );
};

export default Cart;




// import React from 'react';

// const Cart = ({ cartItem }) => {
//     return (
//         <div className='cart-items'>
//       <div className='cart-items-header'>Cart Items</div>
//       {(!cartItem || cartItem.length === 0) && (
//           <div className='cart-items-empty'>No items are added.</div>
//           )}

//       {Array.isArray(cartItem) && (
//           <div>
//           {cartItem.map((item) => (
//               <div key={item.id} className='cart-item-list'>
//               <img
//                 className='cart-items-image'
//                 src={item.image}
//                 alt={item.name}
//                 />
//               {/* Render other details of the item if needed */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;


// import React from 'react';

// const Cart = ({ cartItem }) => {
//   return (
//     <div className='cart-items'>
//       <div className='cart-items-header'>Cart Items</div>
//       {(!cartItem || cartItem.length === 0) && (
//         <div className='cart-items-empty'>No items are added.</div>
//       )}
      
//       <div>
//         {cartItem.map((item) => (
//             <div key={item.id} className='cart-item-list'>
//                 <img className='cart-items-image' 
//                 src={item.image} 
//                 alt={item.name}/>

//             </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;
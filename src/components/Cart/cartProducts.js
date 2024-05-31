import { useEffect, useState } from 'react';

// Media
import emptyCartImg from './emptyCart.png';



export default function CartProducts ({cartHasItem, orderProduct, setOrderProduct, orderPrice, setOrderPrice}) {
    
    const updateQuantity = (productId, newQuantity) => {
        const updatedOrderProduct = orderProduct.map(product => (
            product.prodId === productId ? {...product, prodQuan :newQuantity } :product
        ));
        setOrderProduct(updatedOrderProduct);
    }

    //Calculating the total price
    useEffect(()=> {
        const calcPrice= () => {
            const totalPrice = orderProduct.reduce((acc, product)=> {
                return acc + (product.prodPrice * product.prodQuan);
            }, 0);
            setOrderPrice(totalPrice);
        };
        calcPrice();
    },[orderProduct]);
    
    
    return(
        <div className="bill flex flex-col py-2 border-b">
            
            {cartHasItem?
                
                  <header className="flex justify-between py-2">
                    <span>Product</span>
                    <span>Quantity</span>
                  </header>
                  :
                  null
                }
            
            

            <ul className='flex flex-col gap-3'>

            <div className="bill flex flex-col py-2 border-b">
            {orderProduct?.filter(product => product.prodQuan > 0).length > 0 ? ( // <--- Using inline filtering
                    <ul className='flex flex-col gap-3'>
                        {orderProduct.filter(product => product.prodQuan > 0).map((product) => ( // <--- Using inline filtering
                            <div className='flex justify-between' key={product.prodId}>
                                <CartProduct product={product} />
                                <QuantityControl product={product} updateQuantity={updateQuantity} />
                            </div>
                        ))}
                    </ul>
            ) : (
                <NoItemMess message='' />
            )}
        </div>
                
            </ul>

            
        </div>
    );
};

function CartProduct({product}) {
    return(
        <li className="cart-product flex justify-around md:items-center">
                            <img className='w-1/3' src={product.prodImgSrc} alt={product.prodName}></img>
                            <div className="">
                                <h6 className='text-lg font-bold'>{product.prodName}</h6>
                                <div className='flex gap-2 items-center'>
                                    <h6 className='text-lg font-normal'>{product.prodQuan} X</h6>
                                    <h6 className='text-lg'>BDT {product.prodPrice}</h6>
                                </div>
                                
                            </div>

        </li>
    )
};

function QuantityControl ({product, updateQuantity}) {
  const [quantity, setQuantity] = useState(product.prodQuan);

  const handleDecrement = () => {
    const newQuantity = Math.max(quantity - 1, 0);
    updateQuantity(product.prodId, newQuantity);
    setQuantity(newQuantity); 
  };

  const handleIncrement = () => {


    const newQuantity = quantity + 1;
    updateQuantity(product.prodId, newQuantity); 
    setQuantity(newQuantity);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
      updateQuantity(product.proId, value);
    }
  }; 

  return (
    <div className="flex items-center">
      <button onClick={handleDecrement} className="px-2 py-1 bg-gray-200 rounded">-</button>
      <input 
        type="number"
        value={quantity}
        onChange={handleInputChange}
        className="mx-2 text-center w-12 border border-gray-300 rounded"
      />
      <button onClick={handleIncrement} className="px-2 py-1 bg-gray-200 rounded">+</button>
    </div>
  );
};

function NoItemMess({message}) {
  return(
    <div className='flex flex-col gap-2 items-center justify-center pb-6'>
      <img className='w-1/3' src={emptyCartImg} alt='Empty Cart'></img>
      <p className='text-xl md:2xl text-red-500'>You have no item in the Cart</p>
    </div>
  )
}



// Prev Code
// {cartHasItem?
//   orderProduct.map((product) => (
//     <div className='flex justify-between'>
//        <CartProduct product={product} />
//        <QuantityControl product={product} updateQuantity={updateQuantity}/>
//     </div>
//     ))
//     :
//     <NoItemMess message=''/>
//   }
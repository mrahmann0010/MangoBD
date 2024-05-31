import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Pages
import Home from './pages/home';
import Cart from './pages/cart';
import OrderPage from './pages/order';
import UserPage from './pages/userPage';
import AboutUs from './pages/aboutus';

// Components
import Products from './pages/products';


// Product img, Have to be fixed Later
import prodImg1 from '../src/media/mangoes/amrapali.jpg';
import prodImg2 from '../src/media/mangoes/katimon.jpg';
import prodImg3 from '../src/media/mangoes/langra.jpg';
import prodImg4 from '../src/media/mangoes/fazli.jpg';



function App() {
  const productList = [
    {
      prodId: 1,
      prodName: 'Amrapali',
      prodQuan: 0,
      prodPrice: 800,
      prodImgSrc: prodImg1,
      prodSize: '10 Kgs',
    },
    {
      prodId: 2,
      prodName: 'Langa',
      prodQuan: 0,
      prodPrice: 700,
      prodImgSrc: prodImg3,
      prodSize: '12 Kgs',
    },
    {
      prodId: 3,
      prodName: 'Katimon',
      prodQuan: 0,
      prodPrice: 500,
      prodImgSrc: prodImg2,
      prodSize: '5 Kgs',
    },
    {
      prodId: 4,
      prodName: 'Fazli',
      prodQuan: 0,
      prodPrice: 600,
      prodImgSrc: prodImg4,
      prodSize: '5 Kgs',
    },

  ];

  const [orderProduct, setOrderProduct] = useState([]);
  const [orderPrice, setOrderPrice] = useState(15);
  const [showCartUpNot, setShowCartUpNot] = useState(false);

  const showNot = () => {
    setShowCartUpNot(true);
    console.log('clicked');
    setTimeout(()=>{
      setShowCartUpNot(false);
    }, 3000);
  };


  function handleOrderClick(selectedItem) {
    // Check if the item already exists
    setOrderProduct(prevItems => {
      const itemExists = prevItems.find(product=> product.prodId === selectedItem.prodId);

      if(itemExists) {
        return prevItems.map(product => 
          product.prodId === selectedItem.prodId
          ? {...product, prodQuan : product.prodQuan + 1}
          : product
        );  
      } else {
        return [...prevItems, {...selectedItem, prodQuan: 1}];
      }
    });

  }

  // function handleOrderClick(selectedItem) {
  //   // To update the product Quantity to 1 from 0 - Default Quantity
  //   const upDatedItem = {...selectedItem, prodQuan:1};
  //   setOrderProduct(prevItems=> [...prevItems, upDatedItem]);
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home productList={productList} orderProduct={orderProduct} setOrderProduct={setOrderProduct}
          showNot={showNot} showCartUpNot={showCartUpNot} setShowCartUpNot={setShowCartUpNot} handleOrderClick={handleOrderClick}/>}></Route>


          <Route path='products' element={<Products productList={productList} handleOrderClick={handleOrderClick}
          showNot={showNot} orderProduct={orderProduct}/>}></Route>

          <Route path='cart' element={<Cart orderProduct={orderProduct} setOrderProduct={setOrderProduct}
            orderPrice={orderPrice} setOrderPrice={setOrderPrice}/>}></Route>
          <Route path='order' element={<OrderPage orderPrice={orderPrice}/>}></Route>
          <Route path='user' element={<UserPage orderProduct={orderProduct}/>}></Route>
          <Route path='aboutus' element={<AboutUs orderProduct={orderProduct}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/header/header';
import Register from './components/Register';
import Home from './components/MainPage/Home';
import Valentine from './pages/Valentine/Valentine';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Admindashboard/products';
import Admin from './components/Admindashboard/admin';
import Cart from './components/Cart/cart';
import Vdata from './pages/Valentine/vdata';
import Login from './components/Login';
import './App.css'
import AdminDashboard from './components/Admindashboard/admindashboard';
import Adusers from './components/Admindashboard/aduser';
import Sitesettings from './components/Admindashboard/sitesettings';
import Orders from './components/Admindashboard/adorders';
import Adminprofile from './components/Admindashboard/Adprofile';
import Search from './common/header/search';
import Userorders from './components/Dashboard/userorder';
import Userprofile from './components/Dashboard/Userprofile';
import Aboutus from './common/header/aboutus';
import ContactUs from './common/header/contact';

function App() {
  const { productItems } = Vdata;
  const [cartItems, setCartItems] = useState([]);
  // const [isLoggedIn, setLogin] = useState(true);


  const handleAddProduct = (Products) => {
    const ProductExist = cartItems.find((item) => item.id === Products.id);
    if (ProductExist) {
      setCartItems(cartItems.map((item) => (item.id === Products.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)));
    } else {
      setCartItems([...cartItems, { ...Products, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (Products) => {
    const ProductExist = cartItems.find((item) => item.id === Products.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id != Products.id));
    }
    else{
      setCartItems(cartItems.map((item) => item.id === Products.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item))
    }
  }

  const handlrCartClearance = () =>{
    setCartItems([]);
  }

  return (
    <>
         <BrowserRouter>
          {/* Wrap routes using <Header/> in a <Route> or <React.Fragment> */}
           <Routes>
            <Route path="/" element={<> <Header cartItems={cartItems} /> <Home /> </>}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/aboutus" element={<> <Header cartItems={cartItems}/> <Aboutus/></>} />
            <Route path="/contact" element={<> <Header cartItems={cartItems}/> <ContactUs/></>} />
             <Route path="/Register" element={<Register />} />
             <Route path="/Dashboard" element={ <> <Header cartItems={cartItems}/> <Dashboard /> </> } />
             <Route path="/Valentine" element={ <><Header cartItems={cartItems}/> <Valentine productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/> </> }/>
             <Route path="/admin" element={<Admin />} />
             <Route path="/cart" element={ <> <Header cartItems={cartItems}/> <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handlrCartClearance={handlrCartClearance}/> </> } />
            
             <Route path="/Dashboard/Login" element={ <> <Header cartItems={cartItems}/> <Dashboard rightContent={<Login />} /></>}/>
             <Route path="/Dashboard/userorder" element={ <> <Header cartItems={cartItems}/> <Dashboard rightContent={<Userorders />} /></>}/>
             <Route path="/Dashboard/Userprofile" element={ <> <Header cartItems={cartItems}/> <Dashboard rightContent={<Userprofile />} /></>}/>
             <Route path="/admin/products" element={<Admin rightContent={<Products />} />}/>
             <Route path="/admin/admindashboard" element={<Admin rightContent={<AdminDashboard />} />}/>
             <Route path="/admin/aduser" element={<Admin rightContent={<Adusers />} />}/>
             <Route path="/admin/sitesettings" element={<Admin rightContent={<Sitesettings />} />}/>
             <Route path="/admin/adorders" element={<Admin rightContent={<Orders/>} />}/>
             <Route path="/admin/Adprofile" element={<Admin rightContent={<Adminprofile/>} />}/>
           </Routes>
         </BrowserRouter>
       </>
  );
}

export default App;

  // return (
  //    <>
  //     <BrowserRouter>
  //       Wrap routes using <Header/> in a <Route> or <React.Fragment>
  //       <Routes>
  //         <Route path="/" element={<> <Header /> <Home /> </>}/>
  //         <Route path="/Register" element={<Register />} />
  //         <Route path="/Dashboard" element={ <> <Header /> <Dashboard /> </> } />
  //         <Route path="/Valentine" element={ <><Header /> <Valentine productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}/> </> }/>
  //         <Route path="/admin" element={<Admin />} />
  //         <Route path="/cart" element={ <> <Header /> <Cart cartItems={cartItems} handleAddProduct={handleAddProduct}/> </> } />
          
  //         <Route path="/Dashboard/Login" element={ <> <Header /> <Dashboard rightContent={<Login />} /></>}/>
  //         <Route path="/admin/products" element={<Admin rightContent={<Products />} />}/>
  //       </Routes>
  //     </BrowserRouter>
  //   </>


{/* <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/Login" element={<Login/>} />
    </Routes>
  </BrowserRouter> */}

{/* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}
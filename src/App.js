import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CompareProduct from './pages/CompareProduct';
import Contact from './pages/Contact';
import Forgotpassword from './pages/Forgotpassword';
import Home from './pages/Home';
import Login from './pages/Login';
import OurStore from './pages/OurStore'
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPloicy from './pages/RefundPloicy';
import ResetPassword from './pages/ResetPassword';
import ShippingPolicy from './pages/ShippingPolicy';
import Signup from './pages/Signup';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct';
import TermCondition from './pages/TermCondition';
import WishList from './pages/WishList';

function App() {
  return (
  <>
  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout />}>
   <Route index element={<Home />} />
   <Route path="about" element={<About/>} />
   <Route path='Contact' element={<Contact/>} />
   <Route path='product' element={<OurStore />} />
   <Route path="product/:id" element={<SingleProduct />} />
   <Route path='blogs' element={<Blog />} />
   <Route path='blog/:id' element={<SingleBlog />} />
   <Route path='compare-product' element={<CompareProduct />} />
   <Route path='wishList' element={<WishList />} />
   <Route path="login" element={<Login />} />
   <Route path='forgotpassword' element={<Forgotpassword />} />
   <Route path='signup' element={<Signup />} />
   <Route path='cart' element={<Cart />} />
   <Route path='resetpass' element={<ResetPassword />} />
   <Route path="Privacy-Policy" element={<PrivacyPolicy />} />
   <Route path='Refund-Policy' element={<RefundPloicy />} />
   <Route path='Shipping-Policy' element={<ShippingPolicy />} />
   <Route path='Term&Condition' element={<TermCondition />} />
   <Route path='checkout' element={<Checkout />} />
   <Route path='*' element={<h1>Error 404</h1>} />
  </Route>
  </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;

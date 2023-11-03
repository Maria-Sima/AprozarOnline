import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './App.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import NotFoundPage from './components/NotFound/NotFoundPage.jsx';
import AllSeller from './components/Seller/AllSeller/AllSeller.jsx';
import { ProtectedRoute } from './helpers/ProtectedRoute.jsx';
import ForgotPassword from './pages/Auth/ForgotPassword.jsx';
import Login from './pages/Auth/Login.jsx';
import ResetPassword from './pages/Auth/ResetPassword.jsx';
import Signup from './pages/Auth/Signup.jsx';
import Cart from './pages/Cart/Cart.jsx';

import About from './pages/Extra/About.jsx';
import Contact from './pages/Extra/Contact.jsx';
import FAQ from './pages/Extra/FAQ.jsx';
import Home from './pages/HomePage/Home.jsx';
import AddProduct from './pages/Product/AddProduct.jsx';
import SellerPage from './pages/Seller/SellerPage.jsx';
import UserProfile from './pages/User/UserProfile.jsx';
import { selectCurrentUser } from './reducers/authSlice.js';

const App = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset/*" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sellers/all" element={<AllSeller />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/user/:activepage" element={<UserProfile />} />
        </Route>
        <Route path="/FAQ" element={<FAQ />} />
        <Route element={<ProtectedRoute isAllowed={!!user && user.role === 'SELLER'} />}>
          <Route element={<AddProduct />} path="/addProduct" exact />
        </Route>
        <Route path="/seller/:sellerId" element={<SellerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

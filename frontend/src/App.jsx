import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/HomePage/Home.jsx";
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from "./Pages/Extra/About.jsx";
import Contact from "./Pages/Extra/Contact.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Signup from "./Pages/Auth/Signup.jsx";
import ForgotPassword from "./Pages/Auth/ForgotPassword.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import FAQ from "./Pages/Extra/FAQ.jsx";
import UserProfile from "./Pages/User/UserProfile.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import AddProduct from "./Pages/Product/AddProduct.jsx";
import SellerPage from "./Pages/Seller/SellerPage.jsx";
import NotFoundPage from "./Components/NotFound/NotFoundPage.jsx";
import ResetPassword from "./Pages/Auth/ResetPassword.jsx";
import {ProtectedRoute} from "./middleware/ProtectedRoute.jsx";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "./reducers/authSlice.js";
import AllSeller from "./Components/Seller/AllSeller/AllSeller.jsx";


const App = () => {
    const user = useSelector(selectCurrentUser)

    return (

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/reset/*" element={<ResetPassword/>}/>
                <Route path="/forgotpassword" element={<ForgotPassword/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/sellers" element={<AllSeller/>}/>
                <Route  element={<ProtectedRoute isAllowed={!!user } />}>
                <Route path="/user/:activepage" element={<UserProfile/>}/>
                </Route>
                <Route path="/FAQ" element={<FAQ/>}/>
                <Route element={<ProtectedRoute isAllowed={!!user && user.role==="SELLER"} />}>
                    <Route element={<AddProduct/>} path="/addProduct" exact/>
                </Route>
                <Route path="/seller/:sellerId" element={<SellerPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;

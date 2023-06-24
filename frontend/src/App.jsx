import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/HomePage/Home.jsx";
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from "./Pages/Product/ProductPage.jsx";
import About from "./Pages/Extra/About.jsx";
import Contact from "./Pages/Extra/Contact.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Signup from "./Pages/Auth/Signup.jsx";
import ForgotPassword from "./Pages/Auth/ForgotPassword.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import FAQ from "./Pages/Extra/FAQ.jsx";
import Termsandconditions from "./Pages/Extra/Termsandconditions.jsx";
import UserProfile from "./Pages/User/UserProfile.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";


const App = () => {
    return (

        <BrowserRouter>
            {/*<Navbar />*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product/:prodid"
                       element={
                           <ProductPage/>
                       }
                />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/forgotpassword" element={<ForgotPassword/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path='/user/:activepage' element={<UserProfile/>} />
                <Route path="/FAQ" element={<FAQ/>} />
                <Route path="/termsandconditions" element={<Termsandconditions/>} />

                <Route path="*" element={<div>
                    <h1>404 NOT FOUND</h1>
                </div>} />
            </Routes>

        </BrowserRouter>

    );
};

export default App;

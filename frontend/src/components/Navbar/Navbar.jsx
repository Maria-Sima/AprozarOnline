import {useEffect, useRef, useState} from 'react'
import './Navbar.scss'
import logo from '../../assets/pictures/aprozarVirtual.svg'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {removeAuth} from "../../reducers/authSlice.js";
import {useLogoutUserQuery} from "../../reducers/apiSlice.js";
import {setSearchQuery} from "../../reducers/searchSlice.js";

const Navbar = () => {
    const dispatch = useDispatch()
    const [cartquantity, setcartquantity] = useState(0)
    const cartData = useSelector((state) => state.cart.cartData);
    const user = useSelector((state) => state.auth.user)
    const {  refetch } = useLogoutUserQuery();
    const isLoggedIn = !!user;
    const searchInputRef = useRef(null);
    const handleSearchButtonClick = () => {
        const searchValue = searchInputRef.current.value;
        dispatch(setSearchQuery(searchValue));
    }

    useEffect(() => {
        let total = 0;
        if (cartData.length > 0) {
            cartData.forEach((item) => {
                total += item.quantity;
            });
        }
        setcartquantity(total);
    }, [cartData]);


    const [shows3, setshows3] = useState(false)
    const handleLogout = () => {
        dispatch(removeAuth());
        refetch();
    };
    return (<nav>
        <div className='s1'>
            <img src={logo} alt='logo' className='logo'/>

            <div className='searchbar'>
                <input type="text" placeholder="Search for products and categries" className='search' ref={searchInputRef}/>

                <button onClick={handleSearchButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>

                </button>
            </div>

            <div className='right'>
                <div className='basket'>

                    <span className='qty'>{cartquantity}</span>
                    <Link to='/cart'
                          className='stylenone'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                        </svg>
                    </Link>

                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                        </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>

                        {isLoggedIn ? (<>
                            <Dropdown.Item href="/user/accountsettings">Profile</Dropdown.Item>

                            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                        </>) : (<>
                            <Dropdown.Item href="/login">Login</Dropdown.Item>
                            <Dropdown.Item href="/signup">Signup</Dropdown.Item>
                        </>)}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className='s2'>
            <Link to='/'>
                Home
            </Link>
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                    Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/sellers/all">Our Sellers</Dropdown.Item>
                    <Dropdown.Item href="/categories/Meat">Lactate</Dropdown.Item>
                    <Dropdown.Item href="/categories/Meat">Fructe</Dropdown.Item>
                    <Dropdown.Item>Legume</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Link to='/about'>
                About Us
            </Link>
            <Link to='/contact'>
                Contact Us
            </Link>
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                    More
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/FAQ">FAQ</Dropdown.Item>
                    {user?.role==='SELLER'?
                    <Dropdown.Item href="/addProduct">AddProduct</Dropdown.Item>:null}
                </Dropdown.Menu>
            </Dropdown>
        </div>

        {shows3 ? <div className='s3'>
            <div className='s31'>
                <img src={logo} alt='logo' className='logo'/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6" onClick={() => setshows3(!shows3)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </div>

            <div className='searchbar'>
                <input type="text" placeholder="Search for products" className='search'/>

                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>

                </button>
            </div>

            <ul className='s32'>
                <li>
                    <Link to='/'
                          className='stylenone'
                    >
                        Home
                    </Link>
                </li>

                <li><Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        Categories
                    </Dropdown.Toggle>


                </Dropdown></li>

                <li><Link to='/about' className='stylenone'>
                    <a>About Us</a>
                </Link></li>

                <li><Link to='/contact' className='stylenone'>
                    <a>Contact Us</a>
                </Link></li>

                <li>
                    <div className='basket'>

                        <span className='qty'>{cartquantity}</span>
                        <Link to='/cart'
                              className='stylenone'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                            </svg>
                        </Link>

                    </div>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                            </svg>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {isLoggedIn ? (<>
                                <Dropdown.Item href="/user/accountsettings">Profile</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                            </>) : (<>
                                <Dropdown.Item href="/login">Login</Dropdown.Item>
                                <Dropdown.Item href="/signup">Signup</Dropdown.Item>
                            </>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </li>

                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            More
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/FAQ">FAQ</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </div> : <div className='s3'>
            <div className='s31'>
                <img src={logo} alt='logo' className='logo'/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6"
                     onClick={() => setshows3(!shows3)}
                >
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>

            </div>
        </div>}
    </nav>)
}

export default Navbar
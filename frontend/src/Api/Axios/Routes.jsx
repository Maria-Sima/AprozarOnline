import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const routes = {
 products: "/products",
 orders: "/orders",
 customer: "/customer`",
 register: "/auth/register",
 login:"/auth/login",
 stores:"/seller/all",
 productUtil:"/seller/product",
 addProduct:"/seller/addProduct"
};

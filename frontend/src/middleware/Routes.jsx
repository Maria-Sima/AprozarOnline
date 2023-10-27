const authBase = "/auth";
 const usersBase = "/users";
const productsBase = "/products";

export const routes = {
 auth: {
  register: `${authBase}/register`,
  login: `${authBase}/login`,
  logout: `${authBase}/logout`,
  forgotPassword: `${authBase}/forgotPassword`,
  resetPassword: `${authBase}/resetPassword`
 },
users:{
  getSellers:`${usersBase}/queryByRole/SELLER`,
  user:`${usersBase}/`
},
 products:{
  getProductsBySeller: `${productsBase}/seller/`,
  addProduct: `${productsBase}/addProduct`,
  allProducts:`${productsBase}/all`
 },
 email:{
  sendFeedBackEmail: "/email/sendFeedBack"
 }
};


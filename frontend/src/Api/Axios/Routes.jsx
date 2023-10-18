const authBase = "/auth";
 const usersBase = "/users";
const productsBase = "/products";

export const routes = {
 auth: {
  register: `${authBase}/register`,
  login: `${authBase}/login`,
  logout: `${authBase}/logout`,
 },
users:{
  getSellers:`${usersBase}/queryByRole/SELLER`,
  user:`${usersBase}/`
},
 products:{
  getProductsBySeller: `${productsBase}/seller/`
 }
};


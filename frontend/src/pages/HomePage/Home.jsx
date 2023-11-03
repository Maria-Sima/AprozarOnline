import { useRef, useState } from 'react';

import BannerSlider from '../../components/Banners/BannerSlider.jsx';
import HomeCategories from '../../components/Category/HomeCategories.jsx';
import Footer1 from '../../components/Footer/Footer1.jsx';
import Footer2 from '../../components/Footer/Footer2.jsx';
import Product_Sidebar from '../../components/Product/ProductSidebar/Product_Sidebar.jsx';
import Pagination from '../../helpers/Pagination.jsx';

import { useGetAllProductsQuery } from '../../reducers/apiSlice.js';

const Home = () => {
  const [page, setPage] = useState(0);
  const { data } = useGetAllProductsQuery(page);
  const productSidebarRef = useRef();

  const scrollToProductSidebar = () => {
    if (productSidebarRef.current) {
      productSidebarRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <BannerSlider scrollToProductSidebar={scrollToProductSidebar} />
      <HomeCategories />
      <div ref={productSidebarRef}>
        <Product_Sidebar products={data?.content} />
      </div>
      <Pagination paginate={setPage} />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Home;

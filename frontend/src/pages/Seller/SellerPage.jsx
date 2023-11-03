import { useParams } from 'react-router-dom';
import SingleBanner from '../../components/Banners/SingleBanner.jsx';
import Footer1 from '../../components/Footer/Footer1.jsx';
import Footer2 from '../../components/Footer/Footer2.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import Product_Sidebar from '../../components/Product/ProductSidebar/Product_Sidebar.jsx';
import { useGetProductsBySellerQuery, useGetSellerInfoQuery } from '../../reducers/apiSlice.js';

const SellerPage = () => {
  const { sellerId } = useParams();
  const { data: seller, isLoading } = useGetSellerInfoQuery(sellerId);
  const { data: products } = useGetProductsBySellerQuery(sellerId);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SingleBanner bannerimage={seller?.imageUrl} heading={seller?.firstName + ' ' + seller?.lastName} />
          <Product_Sidebar products={products?.content} />
        </>
      )}

      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default SellerPage;

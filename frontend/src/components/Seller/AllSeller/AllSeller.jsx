import { useGetAllSellersQuery } from '../../../reducers/apiSlice.js';
import SellerCard from '../SellerCard/SellerCard.jsx';
import './AllSeller.scss';

const AllSeller = () => {
  const { data: apiData } = useGetAllSellersQuery();

  return (
    <div className="allsellers">
      <h1>Our Sellers</h1>
      <div className="sellers">
        {apiData?.content?.map((item, index) => {
          return <SellerCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AllSeller;

import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import img from '../../assets/pictures/fruits.webp';
import SingleBanner from '../../components/Banners/SingleBanner.jsx';
import Footer1 from '../../components/Footer/Footer1.jsx';
import Footer2 from '../../components/Footer/Footer2.jsx';
import ProductForm from '../../components/Product/ProductForm/ProductForm.jsx';
import { useAddProductMutation } from '../../reducers/apiSlice.js';

const AddProduct = () => {
  const [addProduct, { error }] = useAddProductMutation();
  const userId = useSelector((state) => state.auth.user.id);
  const addProductData = (data) => {
    const formData = new FormData();
    console.log(data.photo);
    formData.append('photo', data.photo[0]);
    formData.append('productName', data.name);
    formData.append('quantity', data.quantity);
    formData.append('price', data.price);
    formData.append('type', data.type);
    formData.append('productDescription', data.productDescription);
    formData.append('id', userId);

    addProduct(formData);
    if (error) {
      Swal.fire({
        icon: 'error',
        title: ` ${error.data.statusCode} Error`,
        text: `${error.data.message}`,
      });
    }
  };

  return (
    <div>
      <SingleBanner bannerimage={img} heading="Adauga Produs" />
      <ProductForm img={img} submit={addProductData} />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default AddProduct;

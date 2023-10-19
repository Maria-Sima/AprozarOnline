import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import img from '../../assets/pictures/fruits.webp';
import SingleBanner from '../../Components/Banners/SingleBanner.jsx';
import Footer1 from '../../Components/Footer/Footer1.jsx';
import Footer2 from '../../Components/Footer/Footer2.jsx';
import ProductForm from '../../Components/Product/ProductForm/ProductForm.jsx';
import { useAddProductMutation } from '../../reducers/apiSlice.js';

const AddProduct = () => {
  const [addProduct, { error }] = useAddProductMutation();
  const userId = useSelector((state) => state.auth.user_id);
  const addProductData = (data) => {
    const formData = new FormData();
    formData.append('photo', data.photo[0]);
    formData.append('name', data.name);
    formData.append('quantity', data.quantity);
    formData.append('price', data.price);
    formData.append('type', data.type);
    formData.append('productDescription', data.productDescription);
    formData.append('id', 10);

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

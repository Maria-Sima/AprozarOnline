import SingleBanner from "../../Components/Banners/SingleBanner.jsx";
import img from "../../assets/pictures/fruits.webp"
import ProductForm from "../../Components/Product/ProductForm/ProductForm.jsx";
import Footer1 from "../../Components/Footer/Footer1.jsx";
import Footer2 from "../../Components/Footer/Footer2.jsx";
import {routes} from "../../Api/Axios/Routes.jsx";
import {getUser, getUserId, useAxiosPost} from "../../Api/Axios/useFetch.js";

const AddProduct = () => {
    const {post: submitProductData, response} = useAxiosPost();
    const addProduct = (data) => {
        const user=getUserId();
        console.log(data)

        submitProductData(routes.addProduct, formData);
        console.log(routes.addProduct);
    };


    return (
        <div>
            <SingleBanner bannerimage={img} heading="Adauga Produs"/>
            <ProductForm img={img} submit={addProduct}/>
            <Footer1/>
            <Footer2/>

        </div>
    );
};

export default AddProduct;
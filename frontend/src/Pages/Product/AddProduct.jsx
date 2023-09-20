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
        console.log(data)
        const user=getUserId();
        console.log(user)

        const formData = new FormData();
        formData.append("photo", data.photo[0]);
        formData.append("name", data.name);
        formData.append("quantity", data.quantity);
        formData.append("price", data.price);
        formData.append("type", data.type);
        formData.append("productDescription", data.productDescription);
        formData.append("id",user);
        formData.forEach((value, key) => {
            console.log(key, value);
        });
        const headers = {
            'Content-Type': 'multipart/form-data' // Create an object for custom headers
        };

        submitProductData(routes.addProduct, formData,headers);
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
import {DevTool} from "@hookform/devtools";
import {useForm} from "react-hook-form";
import "../../../assets/pictures/veg.png"
import "./ProductForm.scss";
const ProductForm = ({img,submit}) => {
    const {register,handleSubmit,control,formState:{errors},watch}=useForm({
        mode:'onChange'
    });

    return (
        <div className='addProduct'>
            <div className='productCont'>
        <img src={img} alt="productImage"/>
    <form className='productform' encType="multipart/form-data"  onSubmit={handleSubmit(submit)}>
        <h1>Adauga Produs</h1>

        <div className='form-group-row'>
            <div className='formgroup'>
                <label htmlFor='photo'>Product Photo</label>
                <input type='file'  id='photo' {...register('photo',{required:"A profile image is required"})}/>
                <p className="error">{errors.photo?.message}</p>
            </div>
            <div className='formgroup'>
                <label htmlFor='pname'>Product Name</label>
                <input type='text' id='name' {...register('name', { required: "Product Name is required" })} />
                <p className="error">{errors.name?.message}</p>
            </div>
        </div>
        <div className='formgroup'>
            <label htmlFor='quantity'>Cantitate</label>
            <input
                type='number' step=".1"
                id='quantity'
                {...register('quantity', {

                    required: "Quantity is required"
                })}
            />
            <p className="error">{errors.quantity?.message}</p>
        </div>
        <div className='form-group-row'>
            <div className='formgroup'>
                <label htmlFor='password'>Pret</label>
                <input
                    type='number' step=".01"
                    id='price'
                    {...register('price', {
                        required: "Price is required",
                    })}
                />
                <p className="error">{errors.price?.message}</p>
            </div>
            <div className='formgroup'>
                <label htmlFor='description'>Despre Produs</label>
                <input
                    type='text'
                    id='productDescription'
                    {...register("productDescription", {
                        required: "Description is required"
                        })}
                />
                <p className="error">{errors.description?.message}</p>
            </div>
            <div className='formgroup'>
                <label htmlFor='role'>Select Category</label>
                <div className="select">
                    <select
                        {...register("type",{
                            required: "select one option"
                        })}>
                        <option value="Fruits"> Fructe</option>
                        <option value="Dairy">Lactate</option>
                    </select>
                    <p className="error">{errors.type?.message}</p>
                </div>
            </div>
        </div>

        <input type="submit" className="btn" value="Adauga" />
    </form>
    <DevTool control={control} />
</div>
</div>

    );
};

export default ProductForm;
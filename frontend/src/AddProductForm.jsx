import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [photos, setPhotos] = useState([]);
   const userID = localStorage.getItem("userId");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handlePhotosChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };


 
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object to send the form data as multipart/form-data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("type", type);
    formData.append("productDescription", productDescription);
    formData.append("userId", userID);
    photos.forEach((photo, index) => {
      formData.append(`photos[${index}]`, photo);
    });

    try {
      // Make a POST request to the backend endpoint
      const response = await axios.post(
        "http://localhost:8080/seller/addProduct",
        formData,
     
      );
      console.log(response.data);

      // Reset the form
      setName("");
      setQuantity("");
      setPrice("");
      setType("");
      setProductDescription("");
      setPhotos([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "block", width: 500, padding: 30,backgroundColor:"purple",marginTop:"60px" }}>
      <h4 style={{color:"black",fontSize:"20px"}}>Add Product</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={handlePriceChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={type}
            onChange={handleTypeChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter product description"
            value={productDescription}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Photos:</Form.Label>
          <Form.Control type="file" multiple onChange={handlePhotosChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;

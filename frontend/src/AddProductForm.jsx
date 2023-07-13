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
  const [photos, setPhotos] = useState(null);
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
    const files = e.target.files[0];
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

   if (photos) {
     formData.append("photos", photos);
   }

   try {
     // Make a POST request to the backend endpoint
     const response = await axios.post(
       "http://localhost:8080/seller/addProduct",
       formData
     );
     console.log(response.data);

     // Reset the form
     setName("");
     setQuantity("");
     setPrice("");
     setType("");
     setProductDescription("");
     setPhotos(null); // Reset the photos state to null
   } catch (error) {
     console.error(error);
   }
 };

  return (
    <div
      style={{
        display: "block",
        width: 500,
        padding: 0,
        backgroundColor: "white",
        marginTop: "60px",
        backgroundImage: `url(
          "https://media.istockphoto.com/id/1159947998/photo/apples-on-red-scales.jpg?s=612x612&w=0&k=20&c=dpwBgxy1JOe0mkezhZsps_ES8r4tubgVywZEI_3PUy8="
        )`,
      }}
    >
      <h4
        style={{
          color: "white",
          fontSize: "30px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          padding: "10px 0",
        }}
      >
        Add Product Form
      </h4>
      <Form onSubmit={handleSubmit} style={{ fontSize: "18px" }}>
        <Form.Group>
          <Form.Label style={{ fontFamily: "Arial, sans-serif" }}>
            Product Name:
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ fontFamily: "Arial, sans-serif" }}>
            Quantity:
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ fontFamily: "Arial, sans-serif" }}>
            Price:
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={handlePriceChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ fontFamily: "Arial, sans-serif" }}>
            Category:
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={type}
            onChange={handleTypeChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ fontFamily: "Arial, sans-serif" }}>
            Description:
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter product description"
            value={productDescription}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ fontFamily: "Arial, sans-serif" }}>
            Product Photos:
          </Form.Label>
          <Form.Control type="file"  onChange={handlePhotosChange} />
        </Form.Group>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button variant="primary" type="submit" style={{ fontSize: "20px",backgroundColor:"red" }}>
            Add Product
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProductForm;

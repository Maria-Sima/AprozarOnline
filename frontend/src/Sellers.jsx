import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./sellers.css";

export default function Sellers() {

  const [sellers, setSellers] = useState([]);

 useEffect(() => {
   fetch("http://localhost:8080/api/user/seller")
     .then((response) => response.json())
     .then((data) => {
       
       setSellers(data);
     })
     .catch((error) => console.error("Error:", error));
 }, []);
  return (
    <>
      <div className="main">
        {sellers.map((seller, index) => (
          <div className="card-container" key={index}>
            <Link to={`/shop?sellerId=${seller.id}`}>
              <h1 className="card-title" style={{textAlign:"center"}}>{seller.email}</h1>
              <div
                className="card"
                style={{
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlihWgkFyaOQoH9xr4W4kQdx2WRZjX7bq8Q&usqp=CAU")`,
                }}
              >
                <div className="effect-box">
                  <div className="details">
                    <h2 className="name">Buy from:</h2>
                    <h1 className="card-title">{seller.email}</h1>
                    <p className="job" style={{ color: "white" }}></p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <br />
    </>
  );
}

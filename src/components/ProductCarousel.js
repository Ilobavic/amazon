import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductCarousel() {
  const navigate = useNavigate();
  const featured = products.filter((p) => p.featured);

  return (
    <Carousel>
      {featured.map((product) => (
        <Carousel.Item
          key={product.id}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img
            className="d-block w-100"
            src={product.image}
            alt={product.name}
            style={{ maxHeight: 350, objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;

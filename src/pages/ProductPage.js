import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Card, Button } from "react-bootstrap";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="container mt-4">Product not found.</div>;
  }

  return (
    <div className="container mt-4">
      <Card>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          style={{
            maxWidth: 400,
            margin: "auto",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <h4>${product.price.toFixed(2)}</h4>
          <Button variant="success">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductPage;

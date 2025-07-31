import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: 180, objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
        <Button as={Link} to={`/product/${product.id}`} variant="primary">
          View
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

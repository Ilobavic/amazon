import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <div className="container mt-4">
      <h2>All Products</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-2">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomePage;

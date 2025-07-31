import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaShoppingBag } from "react-icons/fa";

function AppNavbar() {
  // Placeholder for cart count
  const cartCount = 0;

  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
        minHeight: 60,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        borderBottom: "2px solid #007bff",
      }}
      variant="dark"
      className="px-3"
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
          style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}
        >
          <FaShoppingBag
            size={30}
            style={{ marginBottom: 2, color: "#00c6ff" }}
          />
          V's Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto" style={{ fontSize: 17 }}>
            <Nav.Link as={Link} to="/home" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="mx-2">
              <FaShoppingCart style={{ marginBottom: 2 }} /> Cart
              <Badge bg="primary" className="ms-1">
                {cartCount}
              </Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/checkout" className="mx-2">
              Checkout
            </Nav.Link>
          </Nav>
          <Form className="d-flex ms-lg-3" style={{ minWidth: 220 }}>
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
              size="sm"
              style={{ borderRadius: 8 }}
            />
            <Button variant="primary" size="sm" style={{ borderRadius: 8 }}>
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

import React from "react";
import { useCart } from "../context/CartContext";
import { Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleQtyChange = (id, qty) => {
    if (qty < 1) return;
    dispatch({ type: "UPDATE_QTY", id, qty: Number(qty) });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <>
          <Table responsive bordered hover className="align-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: 60,
                        height: 40,
                        objectFit: "cover",
                        marginRight: 10,
                        borderRadius: 6,
                      }}
                    />
                    {item.name}
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td style={{ maxWidth: 80 }}>
                    <Form.Control
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(e) => handleQtyChange(item.id, e.target.value)}
                      size="sm"
                    />
                  </td>
                  <td>${(item.price * item.qty).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4>Total: ${total.toFixed(2)}</h4>
            <Button as={Link} to="/checkout" variant="success">
              Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { redirect, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [error, setError] = useState("");
  const redirect = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !email || !textarea) {
      toast.error("Please provide all the informations");
    } else {
      redirect("/");
    }
  };
  return (
    <div className="justify-content-center align-items-center">
      <Container style={{ width: "600px", height: "450px" }}>
        <h1 className="text-center">Contact Us</h1>

        <div className="hr-line bg-success"></div>
        <small className="text-danger">{error}</small>
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Name:"
              className="bg-success-subtle my-3 fw-bold"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email:"
              className="bg-success-subtle my-3 fw-bold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="bg-success-subtle my-3 fw-light"
              as="textarea"
              rows={5}
              placeholder="What You Wanna Say?"
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="success mt-3 d-block mx-auto"
            type="submit"
            style={{ width: "120px" }}
          >
            Submit
          </Button>
        </Form>
        <ToastContainer position="top-center" />
      </Container>
    </div>
  );
};

export default Contact;

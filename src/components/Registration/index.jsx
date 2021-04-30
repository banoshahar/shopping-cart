import React from "react";
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  return (
    <div className="cart--main flex--col-grow">
      <div className="container flex--col-grow align-items-center justify-content-center">
        <div className="login--inner">
          <Form className="login--form w-100">

          <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-flex align-items-center">
            <Button variant="primary" type="submit" className="hdr--btn login--btn">
              Confirm
            </Button>
            <Button variant="secondary" type="button" className="hdr--btn signUp--btn">
              Cancel
            </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;

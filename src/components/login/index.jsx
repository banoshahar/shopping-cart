import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuthHooks from '../../redux/Auth/auth-actions';
import { ButtonStyled as Button } from '../Registration/registration.style'
import { LoginInner , LoginLogo} from './login.style'
import {MainCart} from '../Main/main.style'
import {LoginForm} from './login.style'


const Login = () => {

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const { signinAction } = useAuthHooks();
  const history = useHistory();

  const handleSubmit = () => {
    signinAction(email, password, history)

  }
  return (
    <MainCart className="container align-items-center justify-content-center">
      <LoginInner>
        <LoginLogo>
          <img src='assets/images/neyborly-blue.png' alt='Shopping Cart Logo' />
        </LoginLogo>

        <LoginForm className="w-100" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)} />
            {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <div className="d-flex align-items-center justify-content-end  pt-3">
            <Button variant="primary" type="submit" className="login--btn">
              Confirm
            </Button>
            <Button variant="secondary" type="button" className="signUp--btn">
              Cancel
            </Button>
          </div>
        </LoginForm>
      </LoginInner>
    </MainCart>
  );
};

export default Login;

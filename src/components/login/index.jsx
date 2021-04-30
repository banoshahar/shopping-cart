import React , {useState  }from "react";
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuthHooks from '../../redux/Auth/auth-actions'; 

const Login = () => {

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const { signinAction } = useAuthHooks();
    const history = useHistory();

    const handleSubmit = () => {
      signinAction(email,password,history)

   }
  return (
    <div className="cart--main flex--col-grow">
      <div className="container flex--col-grow align-items-center justify-content-center">
        <div className="login--inner">
          <div className="login--logo">
            <img src='assets/images/neyborly-blue.png' alt='Shopping Cart Logo' />
          </div>

          <Form className="login--form w-100" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" 
              value={email} 
              onChange = {e => setEmail(e.target.value)}/>
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
              value={password} 
              onChange = {e => setPassword(e.target.value)} />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-end pt-3">
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

export default Login;

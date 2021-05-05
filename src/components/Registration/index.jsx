import React , { useEffect, useState }from "react";
import { Form } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import useAuthHooks from '../../redux/Auth/auth-actions';
import { LoginInner , LoginLogo} from '../login/login.style'
import {ButtonStyled as Button} from './registration.style'
import {MainCart} from '../Main/main.style'
import {LoginForm} from '../login/login.style'

const Register = () => {

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const { signupAction } = useAuthHooks();
    const history = useHistory();
    const authData = useSelector(state => state.authReducer);
    

    useEffect( () => {
        if(!!authData.data){
            console.log(authData.data)
            history.push('/')
        }
    } ,[authData])
    const handleSubmit = () => {
        signupAction(name ,email,password)

   }
  return (
    <MainCart className="container align-items-center justify-content-center">
        <LoginInner>
        <LoginLogo>
            <img src='assets/images/neyborly-blue.png' alt='Shopping Cart Logo' />
          </LoginLogo>
          <LoginForm className="w-100" onSubmit={handleSubmit}>

          <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Full Name"
              value={name} 
              onChange = {e => setName(e.target.value)}/>
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} 
              onChange = {e => setEmail(e.target.value)}
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} 
              onChange = {e => setPassword(e.target.value)} />
            </Form.Group>

            <div className="d-flex align-items-center justify-content-end pt-3">
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

export default Register;

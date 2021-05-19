import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import useAuthHooks from '../../redux/Auth/auth-actions';
import { ButtonStyled as Button } from '../Registration/registration.style'
import { LoginInner, LoginLogo } from './login.style'
import { MainCart } from '../Main/main.style'
import { LoginForm } from './login.style'
import InputForm from '../Forms/forms'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required('Password is required')
  .min(8, 'Password is too short - should be 8 chars minimum.'),
});

const Login = () => {

  const { signinAction } = useAuthHooks();
  const history = useHistory();
  const authData = useSelector(state => state.loginReducer);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!!authData.data) {
      history.push('/')
    }
  }, [authData, history])

  const onSubmit = (data) => {
    const {email,password} = data
    signinAction(email, password)
  }
  console.log(errors)

  return (
    <MainCart className="container align-items-center justify-content-center">
      <LoginInner>
        <LoginLogo>
          <img src='/assets/images/neyborly-blue.png' alt='Shopping Cart Logo' />
        </LoginLogo>
        <LoginForm className="w-100" onSubmit={handleSubmit(onSubmit)}>
          <InputForm type="email" register={register("email")} errors={errors} />
          <InputForm  type="password" register={register("password")} errors={errors}/>
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

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import useAuthHooks from '../../redux/Auth/auth-actions';
import { LoginInner, LoginLogo } from '../login/login.style'
import { ButtonStyled as Button } from './registration.style'
import { MainCart } from '../Main/main.style'
import { LoginForm } from '../login/login.style'
import InputForm from '../Forms/forms'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required('Password is required')
  .min(8, 'Password is too short - should be 8 chars minimum.'),
});

const Register = () => {
  const { signupAction } = useAuthHooks();
  const history = useHistory();
  const authData = useSelector(state => state.authReducer);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!!authData.data) {
      history.push('/')
    }
  }, [authData, history])
  const onSubmit = (data) => {
    console.log(data)
    const {email,password,name} = data
    signupAction(name, email, password)
  }
  return (
    <MainCart className="container align-items-center justify-content-center">
      <LoginInner>
        <LoginLogo>
          <img src='/assets/images/neyborly-blue.png' alt='Shopping Cart Logo' />
        </LoginLogo>
        <LoginForm className="w-100" onSubmit={handleSubmit(onSubmit)}>
          <InputForm type="text" register={register("name")} errors={errors}/>
          <InputForm type="email" register={register("email")} errors={errors}/>
          <InputForm  type="password" register={register("password")} errors={errors}/>
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

import * as actionTypes from '../shopping-types';
import { useDispatch } from "react-redux";
import { signin, signup } from './auth-api';


const useAuthHooks = () => {
    const dispatch = useDispatch();

    const signupAction = async (name, email, password) => {
        try {
            const formdata = {
                name: name,
                email: email,
                password: password
            }
            console.log(formdata)
            dispatch({ type: actionTypes.REGISTER_REQUEST });
            try {
                const  data  = await signup(formdata);
                console.log(data)
                debugger;
                console.log(data)
                dispatch({
                    type: actionTypes.REGISTER_SUCCESS,
                    payload: data
                });
            } catch (error) {
                dispatch({
                    type: actionTypes.REGISTER_FAIL,
                    payload: error,
                });

            }

        } catch (error) {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

    const signinAction = async (email, password, router) => {
        try {
            const formData = {
                email: email,
                password: password
            }
            dispatch({ type: actionTypes.LOGIN_REQUEST });

            const { data } = await signin(formData);

            dispatch({ type: actionTypes.LOGIN_SUCCESS });

            dispatch({
                type: actionTypes.LOGIN_FAIL,
                payload: data,
            });

        } catch (error) {
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };
    return {
        signinAction, signupAction
    }
}

export default useAuthHooks;
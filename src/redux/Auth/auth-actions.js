import * as actionTypes from '../shopping-types';
import { useDispatch } from "react-redux";
import { signin, signup , signout} from './auth-api';


const useAuthHooks = () => {
    const dispatch = useDispatch();

    const signupAction = async (name, email, password) => {
        try {
            const formdata = {
                name: name,
                email: email,
                password: password
            }
            dispatch({ type: actionTypes.REGISTER_REQUEST });
            try {
                const  {data}  = await signup(formdata);
                const { result , code,message} = data
                dispatch({
                    type: actionTypes.REGISTER_SUCCESS,
                    payload: result
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

    const signinAction = async (email, password) => {
        try {
            const formData = {
                email: email,
                password: password
            }
            dispatch({ type: actionTypes.LOGIN_REQUEST });

            const { data } = await signin(formData);
            const { result , code,message} = data

            dispatch({ type: actionTypes.LOGIN_SUCCESS });

            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: result,
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

    const signOutAction = async () => {
        try {
            dispatch({ type: actionTypes.LOGIN_REQUEST });

            const { data } = await signout();

            dispatch({ type: actionTypes.LOGIN_SUCCESS });

            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
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
        signinAction, signupAction ,signOutAction
    }
}

export default useAuthHooks;
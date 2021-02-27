
import auth from '@react-native-firebase/auth';
import { Dispatch } from 'redux';

import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILED,
    LOG_IN
} from '../types'

export function signUp(email: string, password: string) {
    return (dispatch: Dispatch) => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
                dispatch({
                    type: LOG_IN_SUCCESS,
                });
            })
            .catch(async error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log(error.code)
                }
                dispatch({
                    type: LOG_IN_FAILED,
                    payload: error.code
                });
            });
    }
}

export function login(email: string, password: string) {

    return (dispatch: Dispatch) => {
        dispatch({
            type: LOG_IN,
        });
        auth().signInWithEmailAndPassword(email, password)
            .then((data) => {
                console.log(data, "datadata")
                dispatch({
                    type: LOG_IN_SUCCESS,
                });
            })
            .catch((err) => {
                console.log(err.code, "dadasdsd")
                if (err.code == "auth/user-not-found") {
                    dispatch(signUp(email, password))
                } else
                    dispatch({
                        type: LOG_IN_FAILED,
                        payload: err.code
                    });
            })

    }
}
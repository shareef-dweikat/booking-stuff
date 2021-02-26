
import auth from '@react-native-firebase/auth';
import { Dispatch } from 'redux';

import { 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILED
} from '../types'

export function login(email: string, password: string) {
  return (dispatch: Dispatch) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
            dispatch({
                type: LOG_IN_SUCCESS,
            });
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                alert('That email address is already in use!')
            }

            if (error.code === 'auth/invalid-email') {
                alert('That email address is invalid!')
            }

            if (error.code === 'auth/weak-password') {
                alert('Your password is weak')
            }
            console.log('something went wrong');
            dispatch({
                type: LOG_IN_FAILED,
            });
        });
    }
}
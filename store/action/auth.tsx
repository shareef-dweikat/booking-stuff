
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
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                 login(email, password)
            }

            if (error.code === 'auth/invalid-email') {
                alert('That email address is invalid!')
            }

            if (error.code === 'auth/weak-password') {
                alert('Your password is weak')
            }
           
            // dispatch({
            //     type: LOG_IN_FAILED,
            // });
        });
        // dispatch({
        //     type: LOG_IN,
        // });
    }
}

export function login(email: string, password: string) {
    console.log(email, password)
    return (dispatch: Dispatch) => {
        auth().signInWithEmailAndPassword(email, password)
        .then((data)=> {
            console.log(data, "datadata")

            dispatch({
                type: LOG_IN_SUCCESS,
            });
        })
        .catch((err)=> {
            console.log(err, "dadasdsd")
             dispatch({
                type: LOG_IN_FAILED,
            });
        })

    }
  }
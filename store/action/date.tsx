
import { Dispatch } from 'redux';
import database from '@react-native-firebase/database';

import {
    FETCH_DATE,
    FETCH_DATE_SUCCESS,
    UPDATE_DATE,
    UPDATE_DATE_SUCCESS
} from '../types'
import { DATE_SAVED, NO_DATE_IS_SELECTED } from '../../constants/strings';
import { APPOINTMENT } from '../../constants/APIs';
import auth from '@react-native-firebase/auth';


export function saveDate(date: string) {

    return async (dispatch: Dispatch) => {
        dispatch({
            type: UPDATE_DATE,
        });
        try {
            await database().ref(`${auth().currentUser?.uid}/${APPOINTMENT}`).set({
                date
            }).then(() => {
                dispatch({
                    type: UPDATE_DATE_SUCCESS,
                    payload: date
                });
            })

        } catch (error) {
            alert(DATE_SAVED)
        }

    }
}

export function fetchDate() {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: FETCH_DATE,
        });
        try {
            const request = await database()
                .ref(`${auth().currentUser?.uid}/${APPOINTMENT}`)
                .once('value')
            dispatch({
                type: FETCH_DATE_SUCCESS,
                payload: request.val() ?
                    request.val().date
                    :
                    NO_DATE_IS_SELECTED
            });
        } catch (error) {
            console.log(error)
        }

    }
}

import { Dispatch } from 'redux';
import database from '@react-native-firebase/database';

import {
    FETCH_DATE,
    FETCH_DATE_SUCCESS,
    UPDATE_DATE,
    UPDATE_DATE_SUCCESS
} from '../types'
import { DATE_SAVED } from '../../constants/strings';
import { APPOINTMENT } from '../../constants/APIs';


export function saveDate(date: string) {

    return async (dispatch: Dispatch) => {
        dispatch({
            type: UPDATE_DATE,
        });
        try {
            await database().ref(APPOINTMENT).set({
                date
            }).then(()=> {
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
                .ref(APPOINTMENT)
                .once('value')
            dispatch({
                type: FETCH_DATE_SUCCESS,
                payload: request.val().date
            });
        } catch (error) {
            console.log(error)
        }

    }
}
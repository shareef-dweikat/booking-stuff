
import { Dispatch } from 'redux';
import database from '@react-native-firebase/database';

import {
    UPDATE_DATE
} from '../types'
import { DATE_SAVED } from '../../constants/strings';
import { APPOINTMENT } from '../../constants/APIs';


export function saveDate(date: string) {

    return async (dispatch: Dispatch) => {
        try {
            await database().ref(APPOINTMENT).set({
                date
            })
            dispatch({
                type: UPDATE_DATE,
                payload: date
            });
        } catch (error) {
            alert(DATE_SAVED)
        }

    }
}
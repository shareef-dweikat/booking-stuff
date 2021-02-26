import React, { Component, useEffect } from "react";
import { Label } from "./styled";
import Colors from "../../constants/Colors";
import { View } from 'react-native'
import database from '@react-native-firebase/database';

// import {useSelector} from 'react-redux'
export default () => {
        useEffect(()=> {
            database()
            .ref('/test/')
            .once('value')
            .then(snapshot => {
              console.log('User data: ', snapshot.val());
            });
        }, [])
    // const x  = useSelector((state)=>state.auth)
    // console.log(x)
    return (
        <Label>dd</Label>
    )
}


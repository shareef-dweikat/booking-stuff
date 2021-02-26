import React, { Component } from "react";
import { Label } from "./styled";
import auth from '@react-native-firebase/auth';
import { Button } from "react-native";

// import { Label } from "./styled";
// import Colors from "../../constants/Colors";
// import { View } from 'react-native'
// import {useSelector} from 'react-redux'
export default () => {
    const handleSignIn = () => {
        auth()
            .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    // const x  = useSelector((state)=>state.auth)
    // console.log(x)
    return (
        <Button title="click" onPress={() => handleSignIn()} />

    )
}


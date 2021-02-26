import React, { Component, useState } from "react";
import {
    Container, Content, LoginInput, Label,
    Logo, SubmitBtn, SubmitBtnText,
    SubmitBtnContainer, Arrow,
} from "./styled";
import auth from '@react-native-firebase/auth';
import { Text, ScrollView, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import KeyboardSpacer from "../KeyboardSpacer";
// import { Label } from "./styled";
// import Colors from "../../constants/Colors";
// import { View } from 'react-native'
// import {useSelector} from 'react-redux'
export default () => {
    const { control, handleSubmit, errors } = useForm();
    // const onSubmit = data => console.log(data);
    const [scrollEnabled, setScrollEnabled] = useState(false);

    const onSubmit = (data) => {
        console.log(data, "dataaaa")
        auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(() => {
                console.log('User account created & signed in!');
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

            });
    }
    // const x  = useSelector((state)=>state.auth)
    // console.log(x)
    return (
        <Container>
            <ScrollView>
                <Content scrollEnabled={scrollEnabled}>
                    <Logo />
                    <Label marginTop={32}>Your email address</Label>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <LoginInput
                                marginTop={64}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="Enter Your email"
                            />
                        )}
                        name="email"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.firstName && <Text>This is required.</Text>}
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <LoginInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                // placehplaceholderTextAlign = 'left'
                                placeholder="Enter Your password"
                            />
                        )}
                        name="password"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.firstName && <Text>This is required.</Text>}
                </Content>
                <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
            </ScrollView>
            <SubmitBtn onPress={handleSubmit(onSubmit)}>
                <SubmitBtnContainer >
                    <SubmitBtnText>
                        Next
                </SubmitBtnText>
                    <Arrow> --> </Arrow>
                </SubmitBtnContainer>
            </SubmitBtn>
        </Container>
    )
}


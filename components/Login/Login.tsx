import React, { Component, useState } from "react";
import {
    Container, Content, LoginInput, Label,
    Logo, SubmitBtn, SubmitBtnText,
    SubmitBtnContainer, Arrow, ErrorMsg,
} from "./styled";
import { useDispatch } from 'react-redux'
import { Text, ScrollView, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import KeyboardSpacer from "../KeyboardSpacer";
import { signUp } from '../../store/action/auth'
export default () => {
    const { control, handleSubmit, errors, getValues, register } = useForm({
        mode: "onChange"

    });
    // const onSubmit = data => console.log(data);
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(signUp(data.email, data.password))
        
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
                    {errors.email && <ErrorMsg>This is required.</ErrorMsg>}
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
                    {errors.password && <ErrorMsg>This is required.</ErrorMsg>}
                </Content>
                <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
            </ScrollView>
            {getValues()?.email?.length > 0 &&
                <SubmitBtn onPress={handleSubmit(onSubmit)}>
                    <SubmitBtnContainer >
                        <SubmitBtnText>
                            Next
                      </SubmitBtnText>
                        <Arrow> --> </Arrow>
                    </SubmitBtnContainer>
                </SubmitBtn>
            }
        </Container>
    )
}


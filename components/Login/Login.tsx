import React, { Component, useState } from "react";
import {
    Container, Content, LoginInput, Label,
    Logo, SubmitBtn, SubmitBtnText,
    SubmitBtnContainer, Arrow, ErrorMsg,
} from "./styled";
import { useDispatch, useSelector } from 'react-redux'
import { Text, ScrollView, Platform, ActivityIndicator, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import KeyboardSpacer from "../KeyboardSpacer";
import { login, signUp } from '../../store/action/auth'
import { isEmail } from "../helpers/Validator";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default () => {
    const { control, handleSubmit, errors, getValues } = useForm({
        mode: "onChange"

    });
    const isLoading = useSelector((state) => state.auth.isLoading)
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(login(data.email, data.password))
    }
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
                        rules={{ required: true, pattern: { value: isEmail, message: 'Email Is Not Valid' } }}
                        defaultValue=""
                    />
                    {errors.email && <ErrorMsg>{errors.email.message || 'Email is required'}</ErrorMsg>}
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <LoginInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                marginTop={Platform.OS == "ios" ? 32 : 8}
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
                    {
                        isLoading ?
                            <View style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                                <ActivityIndicator size='large' color={'white'} />
                            </View>
                            :
                            <SubmitBtnContainer >
                                <SubmitBtnText>
                                    Next
                                </SubmitBtnText>
                                <Arrow> --> </Arrow>
                            </SubmitBtnContainer>
                    }
                </SubmitBtn>
            }
        </Container>
    )
}


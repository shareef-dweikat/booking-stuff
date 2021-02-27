import React, { useState } from "react";
import {
    Container, Content, LoginInput, Label,
    Logo, SubmitBtn, SubmitBtnText,
    SubmitBtnContainer, Arrow, ErrorMsg, Loader,
} from "./styled";
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, Platform, ActivityIndicator, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import KeyboardSpacer from "../KeyboardSpacer";
import { login } from '../../store/action/auth'
import { isEmail } from "../helpers/Validator";
import {
    ARROW,
    EMAIL_IS_NOT_VALID,
    EMAIL_IS_REQUIRED,
    ENTER_YOUR_EMAIL,
    ENTER_YOUR_PASSWORD,
    NEXT,
    THIS_IS_REQUIRED
} from "../../constants/strings";
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
                                placeholder={ENTER_YOUR_EMAIL}
                            />
                        )}
                        name="email"
                        rules={{
                            required: true,
                            pattern: { value: isEmail, message: EMAIL_IS_NOT_VALID }
                        }}
                        defaultValue=""
                    />
                    {errors.email && <ErrorMsg>{errors.email.message || EMAIL_IS_REQUIRED}</ErrorMsg>}
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <LoginInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                marginTop={Platform.OS == "ios" ? 32 : 8}
                                // placehplaceholderTextAlign = 'left'
                                placeholder={ENTER_YOUR_PASSWORD}
                            />
                        )}
                        name="password"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.password && <ErrorMsg>{THIS_IS_REQUIRED}</ErrorMsg>}
                </Content>
                <KeyboardSpacer
                    onToggle={(visible) => setScrollEnabled(visible)}
                />
            </ScrollView>
            {getValues()?.email?.length > 0 &&
                <SubmitBtn onPress={handleSubmit(onSubmit)}>
                    {
                        isLoading ?
                            <Loader>
                                <ActivityIndicator
                                    size='large'
                                    color={'white'}
                                />
                            </Loader>
                            :
                            <SubmitBtnContainer >
                                <SubmitBtnText>
                                    {NEXT}
                                </SubmitBtnText>
                                <Arrow> {ARROW} </Arrow>
                            </SubmitBtnContainer>
                    }
                </SubmitBtn>
            }
        </Container>
    )
}


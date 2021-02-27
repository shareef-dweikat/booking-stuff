import React, { Component, useEffect } from "react";
import {
    Header, Container, Label, Content,
    Btn, BtnText, BtnsRow
} from "./styled";
import { ActivityIndicator, StatusBar, View } from 'react-native'
import database from '@react-native-firebase/database';
import Colors from "../../constants/Colors";
import { DATE, TIME, I_WOULD_LIKE_TO_BOOK } from '../../constants/strings'
import { useSelector } from 'react-redux'
export default ({ navigation }) => {
    console.log(navigation, "navigationnnn")
    // useEffect(() => {
    //     // auth().signOut()
    //     database()
    //         .ref('/test/')
    //         .once('value')
    //         .then(snapshot => {
    //             console.log('User data: ', snapshot.val());
    //         });
    // }, [])
    const date = useSelector((state) => state.date.date)
    const isLoading = useSelector((state) => state.date.isLoading)

    console.log(isLoading, "ssssss")
    return (
        <Container>
            <StatusBar backgroundColor={Colors.blue} />
            <Header navigation={navigation} />
            <Content>
                {
                    isLoading ?
                        <ActivityIndicator size='large' color='black' />
                        :
                        <Label>
                            {I_WOULD_LIKE_TO_BOOK} {date}
                        </Label>
                }
            </Content>
            <BtnsRow>
                <Btn onPress={() => navigation.push('DatePicker')}>
                    <BtnText>
                        {DATE}
                    </BtnText>
                </Btn>
                <Btn onPress={() => navigation.push('TimePicker')}>
                    <BtnText>
                        {TIME}
                    </BtnText>
                </Btn>
            </BtnsRow>

        </Container>
    )
}


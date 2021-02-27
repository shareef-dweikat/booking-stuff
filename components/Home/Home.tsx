import React, { Component, useEffect } from "react";
import {
    Header, Container, Label, Content,
    Btn, BtnText, BtnsRow
} from "./styled";
import { StatusBar, View } from 'react-native'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import Colors from "../../constants/Colors";
import { DATE, TIME, I_WOULD_LIKE_TO_BOOK } from '../../constants/strings'
// import {useSelector} from 'react-redux'
export default ({ navigation }) => {
    console.log(navigation, "navigationnnn")
    useEffect(() => {
        // auth().signOut()
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
        <Container>
            <StatusBar backgroundColor={Colors.blue} />
            <Header navigation={navigation} />
            <Content>
                <Label>
                    {I_WOULD_LIKE_TO_BOOK}
                </Label>
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


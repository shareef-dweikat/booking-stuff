import React, { useCallback, useEffect, useState } from "react";
import {
    Container, BtnText,
    Btn, BtnRow, SubmitBtn,
    SubmitBtnContainer, SubmitBtnText,
     TimeInput, InputRow

} from "./styled";
import { Alert, StatusBar, View } from 'react-native'
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Colors from "../../constants/Colors";
import { DATE, TIME, I_WOULD_LIKE_TO_BOOK } from '../../constants/strings'

export default ({ navigation }) => {
    
    const [markingType, setMarkingType] = useState('custom')

    const [show, setShow] = useState(false)

    const handleConfirm = useCallback((date: string) => {
        
        setShow(false)
    }, [show])



    return (
        <Container>
            <StatusBar backgroundColor={Colors.white} />
            <View style={{height: 300}}></View>
            <BtnRow>
                <Btn>
                    <BtnText active={markingType == 'custom'}>
                        Specific Date
                     </BtnText>
                </Btn>
                <Btn>
                    <BtnText active={markingType == 'period'}>
                        Range
                    </BtnText>
                </Btn>
            </BtnRow>
            <DateTimePickerModal
                isVisible={show}
                mode={'time'}
                is24Hour={true}
                // date={new Date(date)}
                 onConfirm={handleConfirm}
                 onCancel={()=>setShow(false)}
            />
        </Container>
    )
}


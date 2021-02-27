import React, { useCallback, useState } from "react";
import {
    Container, BtnText,
    Btn, BtnRow, 
} from "./styled";
import {  StatusBar, View } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Colors from "../../constants/Colors";
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

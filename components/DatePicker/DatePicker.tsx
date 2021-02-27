import React, { useCallback, useEffect, useState } from "react";
import {
    Container, BtnText,
    Btn, BtnRow, SubmitBtn,
    SubmitBtnContainer, SubmitBtnText,

} from "./styled";
import { StatusBar } from 'react-native'
import moment from 'moment'
import { Calendar } from 'react-native-calendars';
import {useDispatch} from 'react-redux'
import Colors from "../../constants/Colors";
import { DATE, TIME, I_WOULD_LIKE_TO_BOOK } from '../../constants/strings'
import { saveDate } from "../../store/action/date";
// import {useSelector} from 'react-redux'
export default ({ navigation }) => {
    const [markingType, setMarkingType] = useState('custom')
    const [markedDates, setMarkedDates] = useState({})
    const [selectedDate, setSelectedDate] = useState('2021-01-01')
    const dispatch = useDispatch()
    const handlesetmarkingTypeChanged = useCallback((type: string) => {
        clear()
        setMarkingType(type)
    }, [markingType, markedDates])

    const handleDayClicked = useCallback((date: string) => {
        if (markingType == 'period')
            handlePeriod(date)
        else
            handleCustom(date)
    }, [markedDates])

    const handleCustom = useCallback((date: string) => {
        const temp = markedDates
        for (let myDate in temp) {
            temp[myDate] = { selected: false, color: 'green' }
        }
        temp[date?.dateString] = { selected: true, color: 'green' }

        setMarkedDates({ ...temp })
        setSelectedDate(date?.dateString)

    }, [markedDates])

    const handlePeriod = useCallback((date: string) => {
        const temp = markedDates
        if (!temp[date.dateString]?.selected)
            temp[date?.dateString] = { selected: true, color: 'green' }
        else
            temp[date.dateString] = { selected: false }

        let min = '2100-01-01'
        let max = '1900-01-01'
        Object.keys(temp).map((item) => {
            const myDate = item
            if (moment(myDate).isBefore(min)) {
                min = myDate
            }
            if (moment(myDate).isAfter(max)) {
                max = myDate
            }
        })

        temp[moment(min).format('YYYY-MM-DD')] = { startingDay: true, color: 'green' }
        temp[moment(max).format('YYYY-MM-DD')] = { endingDay: true, color: 'green' }

        setMarkedDates({ ...temp })
        const MONTH = moment(min).format('MMM')
        const MIN_DAY = moment(min).format('DD')
        const MAX_DAY = moment(max).format('DD')
        const YEAR = moment(max).format('YYYY')

        setSelectedDate(`${MONTH} ${MIN_DAY}-${MAX_DAY}, ${YEAR}`)
    }, [markedDates])

  
    const clear = useCallback((date: string) => {
        setMarkedDates({})
    }, [markedDates])

    const handleSubmit = useCallback(()=>{
        console.log('Calll back')
        console.log(selectedDate)
        dispatch(saveDate(selectedDate))
        navigation.pop()
    },[selectedDate])
    return (
        <Container>
            <StatusBar backgroundColor={Colors.white} />
            <BtnRow>
                <Btn onPress={() => handlesetmarkingTypeChanged('custom')}>
                    <BtnText active={markingType == 'custom'}>
                        Specific Date
                     </BtnText>
                </Btn>
                <Btn onPress={() => handlesetmarkingTypeChanged('period')}>
                    <BtnText active={markingType == 'period'}>
                        Range
                    </BtnText>
                </Btn>
            </BtnRow>
            <Calendar
                onDayPress={handleDayClicked}
                markedDates={{ ...markedDates }}
                markingType={markingType}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            />
            <Btn marginTop={16} onPress={clear}>
                <BtnText>
                    Reset
                </BtnText>
            </Btn>
            <SubmitBtn onPress={handleSubmit}>
                <SubmitBtnContainer>
                    <SubmitBtnText>
                        {
                            markingType == 'custom' ?
                                moment(selectedDate).format('MMM DD, YYYY')
                                :
                                selectedDate
                        }
                    </SubmitBtnText>
                </SubmitBtnContainer>
            </SubmitBtn>
        </Container>
    )
}


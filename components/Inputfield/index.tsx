import React from 'react'
import { View, Text } from 'react-native'
import {Input} from 'react-native-elements'

const Inputfield= (props: any) => {
    return (
        <Input
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        />
    )
}

export default Inputfield;
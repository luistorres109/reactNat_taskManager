import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import Foundation from '@expo/vector-icons/Foundation';
import { PriorityContainer, Priority } from './styles';
import { ViewProps } from 'react-native';
import React from "react";

interface Props extends ViewProps {
    setValue: (value: number) => void;
    value: number;
}

export default function CPrioritySelect({ setValue, value, ...rest }: Props) {
    return (
        <PriorityContainer {...rest}>
            <Priority color={'#618DDB'} onPress={() => setValue(1)}>
                <MaterialIcons name="task-alt" size={RFValue(24)} color="#FFF" />
            </Priority>
            <Priority color={'#9BCA3E'} onPress={() => setValue(2)}>
                <MaterialCommunityIcons name="bell-outline" size={RFValue(24)} color="#FFF" />
            </Priority>
            <Priority color={'#EFE044'} onPress={() => setValue(3)}>
                <Foundation name="megaphone" size={RFValue(24)} color="#FFF" />
            </Priority>
            <Priority color={'#FFB92A'} onPress={() => setValue(4)}>
                <MaterialIcons name="priority-high" size={RFValue(24)} color="#FFF" />
            </Priority>
            <Priority color={'#ED5314'} onPress={() => setValue(5)}>
                <MaterialCommunityIcons name="alert-outline" size={RFValue(24)} color="#FFF" />
            </Priority>
        </PriorityContainer>
    );
}
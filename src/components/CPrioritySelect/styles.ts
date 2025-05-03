import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const PriorityContainer = styled.View`
    borderRadius: ${RFValue(16)}px;
    height: ${RFValue(40)}px;
    flex-direction: row;
    overflow: hidden;
`;

export const Priority = styled.Pressable<PriorityProps>`
    backgroundColor: ${({ color }) => color};
    justifyContent: center;
    alignItems: center;
    flex: 1;
`;
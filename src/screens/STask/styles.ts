import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    paddingHorizontal: ${RFValue(10)}px;
    borderBottomWidth: ${RFValue(1)}px;
    marginTop: ${RFValue(30)}px;
    padding: ${RFValue(5)}px;
    height: ${RFValue(64)}px;
    gap: ${RFValue(10)}px;
    flexDirection: row;
    alignItems: center;
    border-bottom-color: #618DDB;
`;

export const PriorityContainer = styled.View`
    borderRadius: ${RFValue(16)}px;
    height: ${RFValue(40)}px;
    flex-direction: row;
    overflow: hidden;
`;

interface PriorityProps {
    color: string
}

export const Priority = styled.Pressable<PriorityProps>`
    backgroundColor: ${({ color }) => color};
    justifyContent: center;
    alignItems: center;
    flex: 1;
`;

export const IconContainer = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    aspectRatio: 1;
    height: 100%;
`;

export const Title = styled.Text`
    fontSize: ${RFValue(18)}px;
`;

export const SubTitle = styled.Text`
    paddingLeft: ${RFValue(20)}px;
    fontSize: ${RFValue(14)}px;
`;

export const TitleInput = styled.TextInput`
    paddingHorizontal: ${RFValue(20)}px;
    borderRadius: ${RFValue(15)}px;
    height: ${RFValue(40)}px;
    backgroundColor: #DDD;
    fontWeight: 700;
    flex: 1;
`;

export const DescriptionInput = styled.TextInput`
    paddingHorizontal: ${RFValue(15)}px;
    paddingVertical: ${RFValue(15)}px;
    borderRadius: ${RFValue(15)}px;
    height: ${RFValue(40)}px;
    backgroundColor: #DDD;
    fontWeight: 700;
    flex: 1;
`;

export const AddTaskButton = styled.TouchableOpacity`
    margin-top: ${RFValue(20)}px;
    height: ${RFValue(45)}px;
    width: ${RFValue(300)}px;
    background-color: #4CAF50;
    border-radius: ${RFValue(22)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(10)}px;
`;

export const AddTaskButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: ${RFValue(16)}px;
    margin-right: ${RFValue(10)}px;
`;

export const Background = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.View`
    width: 90%;
    padding: ${RFValue(20)}px;
    border-radius: ${RFValue(15)}px;
    background-color: #FFF;
    gap: ${RFValue(15)}px;
`;
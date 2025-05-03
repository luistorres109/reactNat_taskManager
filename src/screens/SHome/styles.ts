import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity, View } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    padding-horizontal: ${RFValue(10)}px;
    border-bottom-width: ${RFValue(2)}px;
    padding-vertical: ${RFValue(5)}px;
    margin-top: ${RFValue(30)}px;
    height: ${RFValue(64)}px;
    gap: ${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
    border-bottom-color: #618DDB;
`;
export const HeaderModal = styled.View`
    padding-horizontal: ${RFValue(10)}px;
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: #618DDB;
    padding-vertical: ${RFValue(5)}px;
    height: ${RFValue(64)}px;
    gap: ${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
`;

export const HeaderIcon = styled.View`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
`;

export const OpaqueButton = styled(TouchableOpacity)`
    position: absolute;
    right: ${RFValue(20)}px;
`;

export const IconContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: ${RFValue(40)}px;
`;

export const Task = styled(TouchableOpacity)`
    border-radius: ${RFValue(15)}px;
    height: ${RFValue(60)}px;
    background-color: #FFF;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
`;

export const SubTitle = styled.Text`
    padding-left: ${RFValue(20)}px;
    fontSize: ${RFValue(14)}px;
`;

export const TaskTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: bold;
    color: #000;
`;

export const TitleInput = styled.TextInput`
    paddingHorizontal: ${RFValue(20)}px;
    borderRadius: ${RFValue(15)}px;
    height: ${RFValue(30)}px;
    backgroundColor: #DDD;
    fontWeight: 700;
`;

export const DescriptionInput = styled.TextInput`
    padding-horizontal: ${RFValue(15)}px;
    padding-vertical: ${RFValue(15)}px;
    border-radius: ${RFValue(15)}px;
    min-height: ${RFValue(90)}px;
    background-color: #DDD;
    font-weight: 700;
    text-align-vertical: top;
`;

export const TaskDescription = styled.Text`
    font-size: ${RFValue(12)}px;
    color: #555;
`;

export const TaskDescriptionContainer = styled.View`
    flex: 1;
    padding-horizontal: ${RFValue(10)}px;
    justify-content: center;
`;

export const Priority = styled(TouchableOpacity)<PriorityProps>`
    background-color: ${({ color }) => color};
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const PriorityFlag = styled.View`
    background-color: #E53935;
    height: 100%;
    width: ${RFValue(35)}px;
    justify-content: center;
    align-items: center;
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

export const AddTaskButton = styled(TouchableOpacity)`
    margin-top: ${RFValue(20)}px;
    height: ${RFValue(45)}px;
    width: ${RFValue(135)}px;
    background-color: #4CAF50;
    border-radius: ${RFValue(15)}px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    align-self: flex-end;
`;

export const AddTaskButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: ${RFValue(16)}px;
    margin-right: ${RFValue(5)}px;
`;

export const SortContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: ${RFValue(15)}px;
    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(5)}px;
`;

export const OrderByButton = styled(TouchableOpacity)`
    padding-vertical: ${RFValue(5)}px;
`;

export const OrderByText = styled.Text`
    font-size: ${RFValue(12)}px;
    color: #777;
`;

export const ReverseOrderButton = styled(TouchableOpacity)`
    padding: ${RFValue(5)}px;
`;

export const SortModalContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SortModalContent = styled(View)`
  background-color: white;
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(20)}px;
  width: 80%;
  align-items: center;
`;

export const SortModalTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  margin-bottom: ${RFValue(10)}px;
`;

export const SortOptionButton = styled(TouchableOpacity)`
  padding: ${RFValue(10)}px 0;
  width: 100%;
  align-items: center;
`;

export const SortOptionText = styled.Text`
  font-size: ${RFValue(14)}px;
`;

export const SortCancelButton = styled(TouchableOpacity)`
  margin-top: ${RFValue(10)}px;
`;

export const SortCancelText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: red;
`;

export const CancelTaskButton = styled.TouchableOpacity`
  margin-top: ${RFValue(20)}px;
  height: ${RFValue(45)}px;
  width: ${RFValue(135)}px;
  background-color: #ff4d4d;
  border-radius: ${RFValue(15)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: flex-start;
`;

export const CancelTaskButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  margin-left: ${RFValue(5)}px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: ${RFValue(10)}px;
  margin-top: ${RFValue(10)}px;
`;
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const IconSelectContainer = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const ColorPaletteContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${RFValue(10)}px;
  padding: 0 ${RFValue(15)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const ColorButton = styled.TouchableOpacity<{ color: string; selected?: boolean }>`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border-width: 2px;
  border-color: ${({ selected }) => (selected ? '#000' : 'transparent')};
`;

export const IconGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${RFValue(12)}px;
  padding: ${RFValue(8)}px ${RFValue(15)}px;
`;

export const IconButtonWrapper = styled.View`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity<{ selected?: boolean; color?: string }>`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected, color }) => (selected ? color : '#f0f0f0')};
  border-width: 2px;
  border-color: ${({ selected }) => (selected ? '#FFF' : 'transparent')};
`;
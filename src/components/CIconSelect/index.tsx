import React, { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';

import { IIcon } from '../../interfaces/ITask';
import {
  IconSelectContainer,
  ColorPaletteContainer,
  ColorButton,
  IconGrid,
  IconButtonWrapper,
  IconButton,
} from './styles';

interface Props {
  setValue: (icon: IIcon) => void;
  value?: IIcon;
}

const iconNameOptions: string[] = [
  'account', 'airplane', 'clock-outline', 'alarm', 'alert', 'infinity',
  'truck-delivery', 'anchor', 'format-list-bulleted', 'clipboard-text',
  'file-document-outline', 'hammer', 'code-braces', 'crop',
  'content-cut', 'heart-outline', 'atom', 'refresh', 'link-variant',
  'tools', 'baby-carriage', 'battery-charging', 'briefcase', 'baguette',
  'bank', 'home-outline', 'cart-outline', 'bed-empty', 'cup-water',
  'bell-outline', 'bike', 'bitcoin', 'chart-line', 'folder-outline',
  'message-outline', 'cog-outline', 'pencil-outline', 'target', 'cake',
  'calendar-blank-outline', 'camera-outline', 'cellphone', 'earth',
  'email-outline', 'alert-circle-outline', 'eye-outline', 'file-outline',
  'fire',
];

const colorPalette = [
  '#1976D2', '#2196F3', '#9CCC65', '#FFEB3B',
  '#FF9800', '#EC407A', '#F44336', '#000000',
];

export default function CIconSelect({ setValue, value }: Props) {
  const [selectedColor, setSelectedColor] = useState(value?.color || '#2196F3');

  return (
    <IconSelectContainer>
      <ColorPaletteContainer>
        {colorPalette.map(color => (
          <ColorButton
            key={color}
            color={color}
            selected={selectedColor === color}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </ColorPaletteContainer>

      <IconGrid>
        {iconNameOptions.map(iconName => {
          const isSelected = value?.name === iconName && value?.color === selectedColor;
          return (
            <IconButtonWrapper key={iconName}>
              <IconButton
                selected={isSelected}
                color={selectedColor}
                onPress={() => setValue({ name: iconName, color: selectedColor })}
              >
                <MaterialCommunityIcons
                  name={iconName}
                  size={RFValue(16)}
                  color={isSelected ? '#FFF' : selectedColor}
                />
              </IconButton>
            </IconButtonWrapper>
          );
        })}
      </IconGrid>
    </IconSelectContainer>
  );
}

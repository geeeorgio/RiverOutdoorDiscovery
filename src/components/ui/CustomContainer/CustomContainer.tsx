import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps extends ViewProps {
  colorVariant?: 'default' | 'main' | 'secondary';
}

const CustomContainer = ({
  style,
  colorVariant = 'main',
  ...rest
}: CustomContainerProps) => {
  return (
    <View style={[styles.container, styles[colorVariant], style]} {...rest} />
  );
};

export default CustomContainer;

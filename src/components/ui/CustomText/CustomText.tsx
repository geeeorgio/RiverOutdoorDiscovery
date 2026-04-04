import type { TextProps } from 'react-native';
import { Text } from 'react-native';

import { styles } from './styles';

interface CustomTextProps extends TextProps {
  variant?: 'semiBold' | 'regular' | 'thin' | 'btnText';
}

const CustomText = ({
  style,
  variant = 'semiBold',
  ...rest
}: CustomTextProps) => {
  return <Text style={[styles.default, styles[variant], style]} {...rest} />;
};

export default CustomText;

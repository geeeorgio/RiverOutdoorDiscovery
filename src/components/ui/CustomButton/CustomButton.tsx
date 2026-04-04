import type { PressableProps } from 'react-native';
import { Pressable } from 'react-native';

import { styles } from './styles';

interface CustomButtonProps extends PressableProps {
  variant?: 'default' | 'main' | 'secondary' | 'quiz';
}

const CustomButton = ({
  style,
  variant = 'main',
  disabled,
  ...rest
}: CustomButtonProps) => {
  return (
    <Pressable
      style={(state) => [
        styles.container,
        styles[variant],
        typeof style === 'function' ? style(state) : style,
        { opacity: state.pressed ? 0.5 : 1 },
      ]}
      disabled={disabled}
      {...rest}
    />
  );
};

export default CustomButton;

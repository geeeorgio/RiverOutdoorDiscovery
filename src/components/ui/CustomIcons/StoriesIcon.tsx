import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const StoriesIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 25 30" {...props}>
      <Path
        fill={props.color ?? COLORS.inactive_icon}
        fillRule="evenodd"
        d="M11.359.192a2.5 2.5 0 0 1 1.921 0l9.582 3.963c.522.215.972.602 1.29 1.107.317.505.487 1.105.487 1.72v8.096c0 2.523-.637 4.996-1.84 7.142s-2.924 3.881-4.97 5.01l-4.591 2.53c-.285.158-.6.24-.918.24-.32 0-.634-.082-.919-.24L6.81 27.23c-2.046-1.129-3.767-2.864-4.97-5.01S0 17.6 0 15.078V6.982c0-.615.17-1.215.488-1.72a2.8 2.8 0 0 1 1.289-1.107zm.96 2.827L2.739 6.982v8.096c0 1.962.496 3.885 1.431 5.554.936 1.67 2.275 3.018 3.866 3.895l4.284 2.366z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};

export default StoriesIcon;

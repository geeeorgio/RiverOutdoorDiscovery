import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const BackIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 12 22" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        fillRule="evenodd"
        d="M3.054 11 12 20.167 10.211 22 .371 11.917A1.31 1.31 0 0 1 0 11c0-.344.133-.673.37-.917L10.211 0 12 1.833z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};

export default BackIcon;

import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const MarkerIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 26 44" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M13 26.714q1.675 0 3.25-.368v16.083q0 .638-.482 1.104a1.59 1.59 0 0 1-1.143.467h-3.25q-.66 0-1.143-.467a1.49 1.49 0 0 1-.482-1.104V26.346q1.575.368 3.25.368M13 0q5.383 0 9.191 3.683 3.81 3.683 3.809 8.888 0 5.206-3.809 8.889-3.808 3.683-9.191 3.683T3.809 21.46Q-.001 17.777 0 12.57t3.809-8.888T13 0m0 5.5a.8.8 0 0 0 .584-.221.75.75 0 0 0 .229-.565.75.75 0 0 0-.229-.564.8.8 0 0 0-.584-.221q-3.707 0-6.322 2.529T4.063 12.57q0 .345.228.565.228.222.584.221a.8.8 0 0 0 .584-.22.75.75 0 0 0 .229-.566q0-2.921 2.145-4.996T13 5.5"
      ></Path>
    </Svg>
  );
};

export default MarkerIcon;

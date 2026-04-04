import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const LocationsIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 30 30" {...props}>
      <Path
        fill={props.color ?? COLORS.inactive_icon}
        d="M7.995 19.155A6 6 0 1 1 4.5 7.695V7.5a6 6 0 0 1 8.565-5.43 5.25 5.25 0 0 1 9.39 2.49 3.75 3.75 0 0 1 3 3.12 6 6 0 1 1-4.05 11.235A7.5 7.5 0 0 1 18 21.87V27l3 1.5V30H9v-1.5l3-1.5v-4.5zM7.5 15l4.5 4.5V15z"
      ></Path>
    </Svg>
  );
};

export default LocationsIcon;

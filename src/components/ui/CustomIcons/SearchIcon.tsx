import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const SearchIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 22 20" {...props}>
      <Path
        fill={props.color ?? COLORS.inactive_icon}
        d="M7.498 14.157q-3.138 0-5.318-2.058T0 7.079q0-2.964 2.18-5.022Q4.359-.001 7.498 0t5.316 2.058q2.18 2.057 2.18 5.02 0 1.289-.483 2.492-.483 1.205-1.269 2.06l7.73 7.298a.6.6 0 0 1 .197.426.56.56 0 0 1-.196.448.66.66 0 0 1-.463.198.66.66 0 0 1-.463-.198l-7.73-7.298a7.3 7.3 0 0 1-2.257 1.222 8 8 0 0 1-2.564.432m0-1.235q2.604 0 4.397-1.693 1.793-1.692 1.793-4.152t-1.791-4.15q-1.791-1.692-4.396-1.693-2.605 0-4.397 1.693Q1.31 4.62 1.308 7.078q0 2.46 1.793 4.151 1.792 1.693 4.395 1.693"
      ></Path>
    </Svg>
  );
};

export default SearchIcon;

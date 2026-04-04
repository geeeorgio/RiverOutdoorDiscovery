import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const QuizIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 28 30" {...props}>
      <Path
        fill={props.color ?? COLORS.inactive_icon}
        d="M25.364 12.325a9.4 9.4 0 0 1-.9-1.812C24.464 3.925 18.376 0 12.5 0a12.41 12.41 0 0 0-12.5 12.575c0 4.5 1.688 7.85 5 10v6.8a.625.625 0 0 0 .625.625h12.5a.625.625 0 0 0 .625-.625v-3.75c2.175 0 3.5-.262 4.475-1.25.975-.987 1.25-4.175 1.25-5.662h1.25a1.62 1.62 0 0 0 1.25-.65c.175-.28.258-.608.238-.938a9.55 9.55 0 0 0-1.85-4.8m-12.413 9.55a1.874 1.874 0 1 1 0-3.748 1.874 1.874 0 0 1 0 3.748m2-7.6a1.25 1.25 0 0 0-.75 1.15 1.25 1.25 0 0 1-2.5 0 3.75 3.75 0 0 1 2.25-3.437 2.5 2.5 0 1 0-3.5-2.3 1.25 1.25 0 0 1-2.5 0 5 5 0 1 1 7 4.587"
      ></Path>
    </Svg>
  );
};

export default QuizIcon;

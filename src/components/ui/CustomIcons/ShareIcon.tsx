import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ShareIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 15 16" {...props}>
      <Path
        fill={props.color ?? COLORS.onbd_dot_active}
        d="M12.222 16a2.38 2.38 0 0 1-1.731-.7 2.3 2.3 0 0 1-.713-1.7q0-.12.06-.56L4.116 9.76a2.43 2.43 0 0 1-1.67.64 2.38 2.38 0 0 1-1.732-.7A2.3 2.3 0 0 1 0 8q0-1 .713-1.7a2.38 2.38 0 0 1 1.731-.7 2.45 2.45 0 0 1 1.67.64L9.84 2.96a1.3 1.3 0 0 1-.05-.27 4 4 0 0 1-.011-.29q0-1 .713-1.7a2.38 2.38 0 0 1 1.731-.7 2.38 2.38 0 0 1 1.732.7q.713.7.713 1.7t-.713 1.7a2.38 2.38 0 0 1-1.732.7 2.45 2.45 0 0 1-1.67-.64L4.828 7.44q.04.14.051.27t.01.29q0 .16-.01.29a1.2 1.2 0 0 1-.051.27l5.724 3.28q.325-.3.754-.47.427-.17.916-.17a2.38 2.38 0 0 1 1.732.7q.713.7.713 1.7t-.713 1.7a2.38 2.38 0 0 1-1.732.7"
      ></Path>
    </Svg>
  );
};

export default ShareIcon;

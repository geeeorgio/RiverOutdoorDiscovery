import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    borderRadius: wp(10),
  },
  default: {},
  main: {
    backgroundColor: COLORS.btn_background,
    borderWidth: wp(1),
    borderColor: COLORS.onbd_dot_active,
  },
  secondary: {
    borderWidth: wp(1),
    borderColor: COLORS.container_border,
  },
  quiz: {
    backgroundColor: COLORS.tab_bar_background,
    borderWidth: wp(1),
    borderColor: COLORS.container_border,
  },
});

import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  default: {
    color: COLORS.white,
  },
  semiBold: {
    fontFamily: FONTS.SemiBold,
  },
  regular: {
    fontFamily: FONTS.Regular,
  },
  thin: {
    fontFamily: FONTS.Thin,
  },
  btnText: {
    fontFamily: FONTS.Regular,
    color: COLORS.onbd_text,
  },
});

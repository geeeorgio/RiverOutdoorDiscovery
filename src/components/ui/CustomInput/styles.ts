import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
    paddingVertical: wp(2),
    paddingHorizontal: wp(12),
  },
  input: {
    flex: 1,
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
    color: COLORS.white,
  },
  resetButton: {
    position: 'absolute',
    right: wp(8),
    width: wp(24),
    height: wp(24),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(1),
    borderColor: COLORS.placeholder_text,
    borderRadius: wp(12),
    zIndex: 10,
  },
  resetText: {
    fontSize: sp(14),
    color: COLORS.white,
  },
});

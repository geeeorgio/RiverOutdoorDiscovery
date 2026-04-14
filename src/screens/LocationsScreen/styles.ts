import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: hp(8),
  },
  topContainer: {
    width: '100%',
    height: '28%',
  },
  keyboardDismissContainer: {
    width: '100%',
  },
  imgContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(30),
    paddingBottom: hp(24),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.overlay_background,
  },
  title: {
    fontSize: sp(18),
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(18),
  },
  bottomContainer: {
    width: '100%',
    paddingHorizontal: wp(12),
    gap: hp(8),
  },
  listContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(12),
  },
});

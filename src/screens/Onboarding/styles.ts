import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingTop: hp(10),
    paddingHorizontal: wp(20),
    paddingBottom: hp(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    gap: hp(10),
  },
  skipButton: {
    alignSelf: 'flex-end',
    marginBottom: hp(10),
  },
  skipButtonText: {
    fontSize: sp(16),
  },
  logoContainer: {
    width: wp(130),
    height: hp(130),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(37),
    overflow: 'hidden',
    marginBottom: hp(16),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(16),
    paddingHorizontal: wp(16),
  },
  title: {
    fontSize: sp(28),
    textAlign: 'center',
  },
  description: {
    fontSize: sp(18),
    textAlign: 'center',
  },
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    gap: hp(16),
  },
  indexContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(10),
  },
  indexDotActive: {
    width: wp(21),
    height: wp(7),
    borderRadius: wp(5),
    backgroundColor: COLORS.onbd_dot_active,
  },
  indexDotInactive: {
    width: wp(21),
    height: wp(7),
    borderRadius: wp(5),
    backgroundColor: COLORS.onbd_dot_inactive,
  },
  nextButton: {
    width: '90%',
    paddingVertical: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: sp(18),
  },
});

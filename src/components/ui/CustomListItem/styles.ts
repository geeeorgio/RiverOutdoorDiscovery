import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    padding: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    height: hp(100),
    gap: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(10),
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 0.57,
    borderRadius: wp(10),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 0.43,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: sp(14),
  },
  coordinates: {
    fontSize: sp(11),
  },
  coordinatesDescription: {
    fontSize: sp(11),
    color: COLORS.onbd_dot_inactive,
  },
  description: {
    fontSize: sp(10),
  },
  button: {
    width: '100%',
    paddingVertical: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(12),
  },
});

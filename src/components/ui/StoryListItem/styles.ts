import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    padding: wp(10),
  },
  innerContainer: {
    width: '100%',
    gap: hp(8),
  },
  title: {
    fontSize: sp(14),
  },
  description: {
    fontSize: sp(11),
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

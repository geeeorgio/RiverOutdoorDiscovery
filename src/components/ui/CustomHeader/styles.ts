import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: hp(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    width: wp(30),
    height: hp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: sp(18),
  },
});

import { StyleSheet } from 'react-native';

import { hp } from 'src/utils';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
  },
  contentContainer: {
    gap: hp(12),
  },
  footer: {
    height: hp(60),
  },
});

import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: hp(8),
  },
  headerContainer: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: wp(8),
    gap: hp(10),
    zIndex: 1000,
  },
});

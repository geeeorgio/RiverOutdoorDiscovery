import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  emptyContainer: {
    width: '100%',
    alignSelf: 'center',
    padding: wp(16),
    gap: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: sp(15),
    textAlign: 'center',
  },
  emptyTip: {
    fontSize: sp(13),
    textAlign: 'center',
  },
});

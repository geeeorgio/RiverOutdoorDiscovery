import { StyleSheet } from 'react-native';

import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
  },
  typeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp(8),
  },
  typeText: {
    fontSize: sp(14),
  },
});

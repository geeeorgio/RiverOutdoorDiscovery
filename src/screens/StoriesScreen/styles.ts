import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(16),
    gap: hp(16),
    paddingBottom: hp(60),
  },
  title: {
    fontSize: sp(20),
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  storyContainer: {
    width: '100%',
    paddingHorizontal: wp(6),
    gap: hp(16),
    paddingBottom: hp(40),
  },
  storyTitle: {
    fontSize: sp(20),
  },
  storyDescription: {
    fontSize: sp(14),
  },
  storyButton: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(16),
    paddingVertical: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyButtonText: {
    fontSize: sp(14),
  },
});

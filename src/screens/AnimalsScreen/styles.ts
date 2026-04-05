import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(16),
    gap: hp(16),
  },
  title: {
    fontSize: sp(18),
    textAlign: 'center',
  },
  animalContainer: {
    width: '100%',
    paddingHorizontal: wp(6),
    gap: wp(16),
  },
  animalImageContainer: {
    width: '100%',
    height: hp(160),
    borderRadius: wp(10),
    overflow: 'hidden',
  },
  animalImage: {
    width: '100%',
    height: '100%',
  },
  animalInfoContainer: {
    width: '100%',
    gap: wp(16),
  },
  animalName: {
    fontSize: sp(20),
  },
  animalDescription: {
    fontSize: sp(15),
  },
  animalButton: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(16),
    paddingVertical: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  animalButtonText: {
    fontSize: sp(14),
  },
});

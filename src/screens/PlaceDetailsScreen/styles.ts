import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: hp(16),
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: wp(12),
  },
  placeInfoContainer: {
    width: '100%',
    paddingHorizontal: wp(16),
    gap: hp(16),
  },
  imageContainer: {
    width: '100%',
    height: hp(160),
    borderRadius: wp(10),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: sp(18),
    flex: 0.6,
    flexWrap: 'wrap',
  },
  coordinates: {
    flex: 0.4,
    fontSize: sp(13),
    textAlign: 'right',
  },
  coordinatesDescription: {
    fontSize: sp(11),
    color: COLORS.onbd_dot_active,
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(16),
    paddingVertical: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(12),
  },
  description: {
    fontSize: sp(15),
    textAlign: 'justify',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
});

import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(16),
    paddingBottom: hp(60),
  },
  startContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(24),
  },
  startTitle: {
    fontSize: sp(20),
    textAlign: 'center',
  },
  startImageContainer: {
    width: wp(200),
    height: wp(200),
    borderRadius: wp(100),
    overflow: 'hidden',
  },
  startImage: {
    width: '100%',
    height: '100%',
  },
  startDescription: {
    fontSize: sp(16),
    textAlign: 'center',
    paddingHorizontal: wp(20),
  },
  startButton: {
    width: '100%',
    paddingVertical: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(16),
  },
  startButtonText: {
    fontSize: sp(14),
  },
  questionContainer: {
    flex: 1,
    gap: hp(24),
  },
  questionText: {
    fontSize: sp(16),
    textAlign: 'center',
    marginTop: hp(16),
  },
  optionsContainer: {
    width: '100%',
    gap: hp(12),
  },
  optionButton: {
    width: '100%',
    paddingVertical: hp(12),
    paddingHorizontal: wp(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButtonSelected: {
    backgroundColor: COLORS.active_brown_background,
    borderColor: COLORS.btn_border,
  },
  optionText: {
    fontSize: sp(13),
    textAlign: 'center',
  },
  navigationButton: {
    width: '100%',
    paddingVertical: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: hp(24),
  },
  navigationButtonText: {
    fontSize: sp(14),
  },
  resultScrollView: {
    flex: 1,
  },
  resultContainer: {
    width: '100%',
    paddingHorizontal: wp(6),
    gap: hp(16),
    paddingBottom: hp(40),
  },
  resultDescription: {
    fontSize: sp(14),
    textAlign: 'center',
    lineHeight: sp(20),
  },
  traitsTitle: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  traitItem: {
    fontSize: sp(13),
    textAlign: 'center',
  },
  resultImageContainer: {
    width: '100%',
    height: hp(280),
    borderRadius: wp(10),
    overflow: 'hidden',
  },
  resultImage: {
    width: '100%',
    height: '100%',
  },
  shareButton: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(16),
    paddingVertical: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: sp(14),
  },
});

import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  bckg: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(16),
    paddingBottom: hp(60),
  },
  startContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: hp(50),
  },
  startTextContainer: {
    width: '100%',
    gap: hp(60),
  },
  startTitle: {
    fontSize: sp(20),
    textAlign: 'center',
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
    fontSize: sp(18),
  },
  questionContainer: {
    flex: 1,
    gap: hp(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: sp(16),
    textAlign: 'center',
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
  optionText: {
    fontSize: sp(12),
    textAlign: 'center',
  },
  navigationButton: {
    width: '100%',
    paddingVertical: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(50),
  },
  navigationButtonText: {
    fontSize: sp(16),
  },
  resultScrollView: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingBottom: hp(40),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  traitsList: {
    paddingTop: hp(40),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  shareButton: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(10),
    paddingVertical: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  shareButtonText: {
    fontSize: sp(15),
  },
  resultImageContainer: {
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    height: '60%',
  },
  resultImage: {
    width: '100%',
    height: '100%',
  },
});

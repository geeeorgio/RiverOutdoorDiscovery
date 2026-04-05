import React from 'react';
import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { ONBD_IMAGES, ONBOARDING_INFO } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';

const OnboardingScreen_4 = () => {
  const { setIsOnboardingCompleted } = useGameContext();

  const handleSkip = () => setIsOnboardingCompleted(true);

  return (
    <ImageBackground
      source={ONBD_IMAGES.onbd_4}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <CustomButton
            variant="default"
            onPress={handleSkip}
            style={styles.skipButton}
          >
            <CustomText variant="thin" style={styles.skipButtonText}>
              Skip{'>'}
            </CustomText>
          </CustomButton>

          <View style={styles.textContainer}>
            <CustomText variant="regular" style={styles.description}>
              {ONBOARDING_INFO.onboarding_5.description}
            </CustomText>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.indexContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <View
                key={index}
                style={
                  index === ONBOARDING_INFO.onboarding_5.index
                    ? styles.indexDotActive
                    : styles.indexDotInactive
                }
              />
            ))}
          </View>

          <CustomButton
            variant="main"
            onPress={handleSkip}
            style={styles.nextButton}
          >
            <CustomText variant="btnText" style={styles.nextButtonText}>
              {ONBOARDING_INFO.onboarding_5.buttonText}
            </CustomText>
          </CustomButton>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnboardingScreen_4;

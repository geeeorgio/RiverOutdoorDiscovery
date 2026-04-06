import React, { useCallback, useMemo, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomButton,
  CustomHeader,
  CustomIcon,
  CustomText,
} from 'src/components';
import {
  QUIZ_QUESTIONS,
  QUIZ_SCREEN_INFO,
  QUESTIONS_PER_ONE_QUIZ,
  TRAVEL_TYPES_INFO,
} from 'src/constants';
import type { QUIZ_STATUS, QUIZ_QUESTION_TYPE, TRAVELER_TYPE } from 'src/types';
import { wp, hp, handleShare, shuffleArray } from 'src/utils';

const QuizScreen = () => {
  const [status, setStatus] = useState<QUIZ_STATUS>('idle');
  const [questions, setQuestions] = useState<QUIZ_QUESTION_TYPE[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<TRAVELER_TYPE[]>([]);
  const [selectedOption, setSelectedOption] = useState<TRAVELER_TYPE | null>(
    null,
  );

  const resultType = useMemo<TRAVELER_TYPE | null>(() => {
    if (status !== 'completed' || answers.length === 0) return null;

    const counts: Record<TRAVELER_TYPE, number> = {
      explorer: 0,
      adventurer: 0,
      relaxer: 0,
    };
    answers.forEach((type) => {
      counts[type]++;
    });

    return (Object.keys(counts) as TRAVELER_TYPE[]).reduce((a, b) =>
      counts[a] >= counts[b] ? a : b,
    );
  }, [status, answers]);

  const result = resultType ? TRAVEL_TYPES_INFO[resultType] : null;

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleStartQuiz = useCallback(() => {
    const shuffled = shuffleArray(QUIZ_QUESTIONS).slice(
      0,
      QUESTIONS_PER_ONE_QUIZ,
    );
    setQuestions(shuffled);
    setAnswers([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setStatus('inProgress');
  }, []);

  const handleSelectOption = useCallback((type: TRAVELER_TYPE) => {
    setSelectedOption(type);
  }, []);

  const handleNext = useCallback(() => {
    if (!selectedOption) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (isLastQuestion) {
      setStatus('completed');
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    }
  }, [selectedOption, answers, isLastQuestion]);

  const handleBack = useCallback(() => {
    if (currentIndex > 0) {
      const newAnswers = answers.slice(0, -1);
      setAnswers(newAnswers);
      setCurrentIndex((prev) => prev - 1);
      setSelectedOption(null);
    } else {
      setStatus('idle');
    }
  }, [currentIndex, answers]);

  const handleRestart = useCallback(() => {
    setStatus('idle');
    setQuestions([]);
    setAnswers([]);
    setCurrentIndex(0);
    setSelectedOption(null);
  }, []);

  if (status === 'completed' && result) {
    return (
      <SafeAreaView style={styles.container}>
        <CustomHeader
          title={QUIZ_SCREEN_INFO.title}
          onBackPress={handleRestart}
        />

        <ScrollView
          style={styles.resultScrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.resultContainer}>
            <CustomText variant="regular" style={styles.resultDescription}>
              {result.description}
            </CustomText>
            <CustomText variant="semiBold" style={styles.traitsTitle}>
              Traits:
            </CustomText>
            {result.traits.map((trait, index) => (
              <CustomText
                key={index}
                variant="regular"
                style={styles.traitItem}
              >
                {`\u2022 ${trait}`}
              </CustomText>
            ))}

            <View style={styles.resultImageContainer}>
              <Image
                source={result.image}
                style={styles.resultImage}
                resizeMode="cover"
              />
            </View>

            <CustomButton
              variant="main"
              style={styles.shareButton}
              onPress={handleShare}
            >
              <CustomText variant="btnText" style={styles.shareButtonText}>
                Share
              </CustomText>
              <CustomIcon name="share" width={wp(16)} height={hp(16)} />
            </CustomButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (status === 'inProgress' && currentQuestion) {
    return (
      <SafeAreaView style={styles.container}>
        <CustomHeader title={QUIZ_SCREEN_INFO.title} onBackPress={handleBack} />

        <View style={styles.questionContainer}>
          <CustomText variant="semiBold" style={styles.questionText}>
            {currentQuestion.question}
          </CustomText>

          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOption === option.type;
              return (
                <CustomButton
                  key={option.type}
                  variant="quiz"
                  style={[
                    styles.optionButton,
                    isSelected && styles.optionButtonSelected,
                  ]}
                  onPress={() => handleSelectOption(option.type)}
                >
                  <CustomText variant="regular" style={styles.optionText}>
                    {option.option}
                  </CustomText>
                </CustomButton>
              );
            })}
          </View>

          <CustomButton
            variant="main"
            style={styles.navigationButton}
            onPress={handleNext}
            disabled={!selectedOption}
          >
            <CustomText variant="btnText" style={styles.navigationButtonText}>
              {isLastQuestion ? 'Finish' : 'Next'}
            </CustomText>
          </CustomButton>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.startContainer}>
        <CustomText variant="semiBold" style={styles.startTitle}>
          {QUIZ_SCREEN_INFO.title}
        </CustomText>

        <View style={styles.startImageContainer}>
          <Image
            source={QUIZ_SCREEN_INFO.image}
            style={styles.startImage}
            resizeMode="cover"
          />
        </View>

        <CustomText variant="regular" style={styles.startDescription}>
          {QUIZ_SCREEN_INFO.description}
        </CustomText>

        <CustomButton
          variant="main"
          style={styles.startButton}
          onPress={handleStartQuiz}
        >
          <CustomText variant="btnText" style={styles.startButtonText}>
            {QUIZ_SCREEN_INFO.buttonText}
          </CustomText>
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomButton,
  CustomHeader,
  CustomIcon,
  CustomText,
  StoryList,
} from 'src/components';
import { COLORS, STORIES } from 'src/constants';
import type { STORY_TYPE } from 'src/types';
import { wp, hp, handleShare } from 'src/utils';

const StoriesScreen = () => {
  const [selectedStory, setSelectedStory] = useState<STORY_TYPE | null>(null);

  const handlePress = useCallback((id: string) => {
    setSelectedStory(STORIES.find((story) => story.id === id) || null);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {selectedStory ? (
        <>
          <CustomHeader onBackPress={() => setSelectedStory(null)} />

          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.storyContainer}>
              <CustomText variant="semiBold" style={styles.storyTitle}>
                {selectedStory.title}
              </CustomText>
              <CustomText variant="semiBold" style={styles.storyDescription}>
                {selectedStory.description}
              </CustomText>
              <CustomButton
                variant="main"
                style={styles.storyButton}
                onPress={handleShare}
              >
                <CustomText variant="btnText" style={styles.storyButtonText}>
                  Share
                </CustomText>
                <CustomIcon
                  name="share"
                  width={wp(16)}
                  height={hp(16)}
                  color={COLORS.white}
                />
              </CustomButton>
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <CustomText variant="semiBold" style={styles.title}>
            Survival Stories
          </CustomText>

          <StoryList data={STORIES} handlePress={handlePress} />
        </>
      )}
    </SafeAreaView>
  );
};

export default StoriesScreen;

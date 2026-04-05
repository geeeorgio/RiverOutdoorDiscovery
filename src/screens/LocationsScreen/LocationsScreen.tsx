import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { ImageBackground, Keyboard, Pressable, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomButton,
  CustomFilter,
  CustomInput,
  CustomList,
  CustomText,
  EmptyMessage,
} from 'src/components';
import {
  LOCATIONS_SCREEN_INFO,
  MAIN_BACKGROUND,
  PLACES_LIST,
} from 'src/constants';
import type { FILTER_TYPE, RootStackNavigationProp } from 'src/types';

const LocationsScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<RootStackNavigationProp>();

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<FILTER_TYPE>('Rivers');

  const places = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();

    if (!trimmed) {
      return PLACES_LIST.filter((place) => place.type === filter);
    }

    return PLACES_LIST.filter(
      (place) =>
        place.type === filter && place.title.toLowerCase().includes(trimmed),
    );
  }, [filter, searchQuery]);

  const handleStartQuiz = useCallback(() => {
    navigation.navigate('MainStack', {
      screen: 'QuizScreen',
    });
  }, [navigation]);

  const handlePress = useCallback(
    (id: string) => {
      navigation.navigate('PlaceDetailsScreen', { placeId: id });
    },
    [navigation],
  );

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      <Pressable style={styles.topContainer} onPress={Keyboard.dismiss}>
        <ImageBackground
          source={MAIN_BACKGROUND}
          style={styles.imgContainer}
          resizeMode="stretch"
        >
          <View style={[styles.textContainer, { paddingTop: top }]}>
            <CustomText variant="semiBold" style={styles.title}>
              {LOCATIONS_SCREEN_INFO.description}
            </CustomText>
            <CustomButton
              variant="main"
              style={styles.button}
              onPress={handleStartQuiz}
            >
              <CustomText variant="btnText" style={styles.buttonText}>
                {LOCATIONS_SCREEN_INFO.buttonText}
              </CustomText>
            </CustomButton>
          </View>
        </ImageBackground>
      </Pressable>

      <View style={styles.bottomContainer}>
        <CustomInput setQuery={setSearchQuery} />
        <CustomFilter setFilter={setFilter} filter={filter} />
      </View>

      <View style={styles.listContainer}>
        {places.length > 0 ? (
          <CustomList data={places} handlePress={handlePress} />
        ) : (
          <EmptyMessage />
        )}
      </View>
    </SafeAreaView>
  );
};

export default LocationsScreen;

import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomFilter, CustomInput, MapComponent } from 'src/components';
import { PLACES_LIST } from 'src/constants';
import type {
  FILTER_TYPE,
  MainStackParamList,
  RootStackNavigationProp,
} from 'src/types';
import { hp } from 'src/utils';

const MapScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const { params } = useRoute<RouteProp<MainStackParamList, 'MapScreen'>>();
  const placeId = params?.placeId;
  const { top } = useSafeAreaInsets();

  const [filter, setFilter] = useState<FILTER_TYPE>('Rivers');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePlaceId, setActivePlaceId] = useState<string | undefined>(
    placeId,
  );

  const isFilterDisabled = useMemo(
    () => Boolean(activePlaceId),
    [activePlaceId],
  );

  useEffect(() => {
    if (placeId) {
      setActivePlaceId(placeId);
    } else {
      setActivePlaceId(undefined);
    }
  }, [placeId]);

  const place = useMemo(
    () =>
      activePlaceId
        ? PLACES_LIST.find((p) => p.id === activePlaceId)
        : undefined,
    [activePlaceId],
  );

  const list = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();

    if (activePlaceId) return [];

    if (!trimmed) {
      return PLACES_LIST.filter((p) => p.type === filter);
    }

    const filteredPlacesTitles = PLACES_LIST.filter((p) =>
      p.title.includes(trimmed),
    );

    if (!filteredPlacesTitles.length) {
      return PLACES_LIST.filter((p) => p.type === filter);
    }

    return filteredPlacesTitles;
  }, [filter, searchQuery, activePlaceId]);

  const handleFilterPress = useCallback(
    (newFilter: FILTER_TYPE) => {
      if (activePlaceId) return;

      if (newFilter === filter) return;

      setFilter(newFilter);
    },
    [filter, activePlaceId],
  );

  const handleCloseDetailsPress = useCallback(() => {
    setActivePlaceId(undefined);
    navigation.setParams({ placeId: undefined });
  }, [navigation]);

  const handleDetailPress = useCallback(
    (id: string) => {
      navigation.navigate('PlaceDetailsScreen', { placeId: id });
    },
    [navigation],
  );

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.container}>
      <MapComponent
        place={place}
        list={list}
        onCloseDetailsPress={handleCloseDetailsPress}
        onDetailPress={handleDetailPress}
      />

      <View style={[styles.headerContainer, { top: top + hp(20) }]}>
        <CustomInput setQuery={setSearchQuery} />
        <CustomFilter
          filter={filter}
          setFilter={handleFilterPress}
          disabled={isFilterDisabled}
        />
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;

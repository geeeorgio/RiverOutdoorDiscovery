import React, { useCallback, useMemo, useState } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomButton,
  CustomFilter,
  CustomHeader,
  CustomIcon,
  CustomList,
  CustomText,
} from 'src/components';
import { ANIMALS_LIST } from 'src/constants';
import type { ANIMAL_INFO_TYPE, FILTER_TYPE } from 'src/types';
import { wp, hp, handleShare } from 'src/utils';

const AnimalsScreen = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<ANIMAL_INFO_TYPE | null>(
    null,
  );
  const [filter, setFilter] = useState<FILTER_TYPE>('Rivers');

  const animals = useMemo(() => {
    return ANIMALS_LIST.filter((animal) => animal.type === filter);
  }, [filter]);

  const handlePress = useCallback((id: string) => {
    setSelectedAnimal(ANIMALS_LIST.find((animal) => animal.id === id) || null);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {selectedAnimal ? (
        <>
          <CustomHeader onBackPress={() => setSelectedAnimal(null)} />

          <View style={styles.animalContainer}>
            <View style={styles.animalImageContainer}>
              <Image
                source={selectedAnimal.image}
                style={styles.animalImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.animalInfoContainer}>
              <CustomText variant="semiBold" style={styles.animalName}>
                {selectedAnimal.name}
              </CustomText>
              <CustomText variant="semiBold" style={styles.animalDescription}>
                {selectedAnimal.description}
              </CustomText>
            </View>
            <CustomButton
              variant="main"
              style={styles.animalButton}
              onPress={handleShare}
            >
              <CustomText variant="btnText" style={styles.animalButtonText}>
                Share
              </CustomText>
              <CustomIcon name="share" width={wp(16)} height={hp(16)} />
            </CustomButton>
          </View>
        </>
      ) : (
        <>
          <CustomText variant="semiBold" style={styles.title}>
            Animals
          </CustomText>

          <CustomFilter setFilter={setFilter} filter={filter} />

          <CustomList data={animals} handlePress={handlePress} />
        </>
      )}
    </SafeAreaView>
  );
};

export default AnimalsScreen;

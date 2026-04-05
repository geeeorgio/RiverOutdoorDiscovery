import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomButton,
  CustomHeader,
  CustomIcon,
  CustomText,
  EmptyMessage,
  MapComponent,
} from 'src/components';
import { COLORS, PLACES_LIST } from 'src/constants';
import type { RootStackNavigationProp, RootStackParamList } from 'src/types';
import { hp, wp } from 'src/utils';

const PlaceDetailsScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const { placeId } =
    useRoute<RouteProp<RootStackParamList, 'PlaceDetailsScreen'>>().params;

  const place = PLACES_LIST.find((p) => p.id === placeId) || null;

  const handleBackPress = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('MainStack', {
        screen: 'LocationsScreen',
      });
    }
  }, [navigation]);

  const handleOpenInMap = useCallback(
    (id: string) => {
      navigation.navigate('MainStack', {
        screen: 'MapScreen',
        params: { placeId: id },
      });
    },
    [navigation],
  );

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader onBackPress={handleBackPress} />
      </View>

      {place ? (
        <>
          <View style={styles.placeInfoContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={place?.image}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.textContainer}>
              <CustomText variant="semiBold" style={styles.title}>
                {place?.title}
              </CustomText>
              <CustomText variant="semiBold" style={styles.coordinates}>
                {`Coordinates:\n`}
                <CustomText
                  variant="regular"
                  style={styles.coordinatesDescription}
                >{`${place?.coordinates.latitude.toFixed(4)}, ${place?.coordinates.longitude.toFixed(4)}`}</CustomText>
              </CustomText>
            </View>

            <CustomButton
              variant="main"
              style={styles.button}
              onPress={() => handleOpenInMap(placeId)}
            >
              <CustomText variant="btnText" style={styles.buttonText}>
                Open in Map
              </CustomText>
              <CustomIcon
                name="map"
                width={wp(16)}
                height={hp(16)}
                color={COLORS.onbd_text}
              />
            </CustomButton>

            <CustomText variant="semiBold" style={styles.description}>
              {place?.description}
            </CustomText>
          </View>

          <View style={styles.mapContainer}>
            <MapComponent place={place} />
          </View>
        </>
      ) : (
        <EmptyMessage text="Some error occurred 🕵️" tip="Try again later" />
      )}
    </SafeAreaView>
  );
};

export default PlaceDetailsScreen;

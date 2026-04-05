import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { ANIMAL_INFO_TYPE, PLACE_INFO_TYPE } from 'src/types';

interface CustomListItemProps {
  item: PLACE_INFO_TYPE | ANIMAL_INFO_TYPE;
  handlePress: (id: string) => void;
}

const CustomListItem = ({ item, handlePress }: CustomListItemProps) => {
  const isPlace = 'coordinates' in item;
  const title = isPlace ? item.title : item.name;

  return (
    <CustomContainer colorVariant="main" style={styles.item}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        </View>
        <View style={styles.textContainer}>
          <CustomText variant="semiBold" style={styles.title}>
            {title}
          </CustomText>
          {isPlace ? (
            <CustomText variant="semiBold" style={styles.coordinates}>
              {`Coordinates:\n`}
              <CustomText
                variant="regular"
                style={styles.coordinatesDescription}
              >
                {`${item.coordinates.latitude.toFixed(4)}, ${item.coordinates.longitude.toFixed(4)}`}
              </CustomText>
            </CustomText>
          ) : (
            <CustomText
              variant="regular"
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.description}
            </CustomText>
          )}
          <CustomButton
            variant="main"
            style={styles.button}
            onPress={() => handlePress(item.id)}
          >
            <CustomText variant="btnText" style={styles.buttonText}>
              Open
            </CustomText>
          </CustomButton>
        </View>
      </View>
    </CustomContainer>
  );
};

export default CustomListItem;

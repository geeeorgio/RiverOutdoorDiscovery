import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { STORY_TYPE } from 'src/types';

interface StoryListItemProps {
  item: STORY_TYPE;
  handlePress: (id: string) => void;
}

const StoryListItem = ({ item, handlePress }: StoryListItemProps) => {
  return (
    <CustomContainer colorVariant="main" style={styles.item}>
      <View style={styles.innerContainer}>
        <CustomText variant="semiBold" style={styles.title}>
          {item.title}
        </CustomText>
        <CustomText
          variant="regular"
          style={styles.description}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.description}
        </CustomText>
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
    </CustomContainer>
  );
};

export default StoryListItem;

import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomIcon from '../CustomIcons/CustomIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

interface CustomHeaderProps {
  title?: string;
  onBackPress: () => void;
}

const CustomHeader = ({ title, onBackPress }: CustomHeaderProps) => {
  return (
    <View style={styles.container}>
      <CustomButton variant="default" onPress={onBackPress} style={styles.btn}>
        <CustomIcon
          name="back"
          width={wp(12)}
          height={hp(24)}
          color={COLORS.white}
        />
      </CustomButton>

      {title && (
        <CustomText variant="semiBold" style={styles.title}>
          {title}
        </CustomText>
      )}
    </View>
  );
};

export default CustomHeader;

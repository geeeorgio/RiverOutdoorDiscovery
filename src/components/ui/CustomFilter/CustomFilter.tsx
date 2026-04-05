import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { FILTER_TYPE } from 'src/types';
import { PLACES_TYPES_LIST } from 'src/types';

interface CustomFilterProps {
  filter: FILTER_TYPE;
  setFilter: (filter: FILTER_TYPE) => void;
}

const CustomFilter = ({ filter, setFilter }: CustomFilterProps) => {
  return (
    <CustomContainer colorVariant="secondary" style={styles.container}>
      {PLACES_TYPES_LIST.map((type) => (
        <CustomButton
          key={type}
          variant={type === filter ? 'main' : 'default'}
          style={styles.typeButton}
          onPress={() => setFilter(type)}
        >
          <CustomText
            variant={type === filter ? 'semiBold' : 'regular'}
            style={styles.typeText}
          >
            {type}
          </CustomText>
        </CustomButton>
      ))}
    </CustomContainer>
  );
};

export default CustomFilter;

import { useState } from 'react';
import { Keyboard, TextInput } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomIcon from '../CustomIcons/CustomIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

interface CustomInputProps {
  setQuery: (query: string) => void;
}

const CustomInput = ({ setQuery }: CustomInputProps) => {
  const [search, setSearch] = useState('');

  const handleSearch = (text: string) => {
    setSearch(text);

    setQuery(text);
  };

  const handleResetFilter = () => {
    setSearch('');
    setQuery('');
    Keyboard.dismiss();
  };

  return (
    <CustomContainer colorVariant="secondary" style={styles.container}>
      <CustomIcon
        name="search"
        width={wp(20)}
        height={hp(20)}
        color={COLORS.placeholder_text}
      />
      <TextInput
        placeholder="Search..."
        placeholderTextColor={COLORS.placeholder_text}
        style={styles.input}
        value={search}
        onChangeText={handleSearch}
        submitBehavior="blurAndSubmit"
        returnKeyType="search"
        maxLength={50}
        autoCorrect={false}
        autoCapitalize="words"
        spellCheck={false}
      />

      {search && (
        <CustomButton
          variant="default"
          onPress={handleResetFilter}
          style={styles.resetButton}
        >
          <CustomText variant="regular" style={styles.resetText}>
            X
          </CustomText>
        </CustomButton>
      )}
    </CustomContainer>
  );
};

export default CustomInput;

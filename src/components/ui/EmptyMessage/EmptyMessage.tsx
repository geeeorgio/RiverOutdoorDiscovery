import React from 'react';

import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface EmptyMessageProps {
  text?: string;
  tip?: string;
}

const EmptyMessage = ({ text, tip }: EmptyMessageProps) => {
  return (
    <CustomContainer colorVariant="secondary" style={styles.emptyContainer}>
      <CustomText variant="semiBold" style={styles.emptyText}>
        {text || 'Oops! No results found 🕵️'}
      </CustomText>
      <CustomText variant="btnText" style={styles.emptyTip}>
        {tip || 'Try again with a different search query'}
      </CustomText>
    </CustomContainer>
  );
};

export default EmptyMessage;

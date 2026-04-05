import { useNavigation } from '@react-navigation/native';
import { useCallback, useRef } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { FlatList, View } from 'react-native';

import CustomListItem from '../CustomListItem/CustomListItem';

import { styles } from './styles';

import type {
  MainStackNavigationProp,
  ANIMAL_INFO_TYPE,
  PLACE_INFO_TYPE,
} from 'src/types';

interface CustomListProps {
  data: PLACE_INFO_TYPE[] | ANIMAL_INFO_TYPE[];
  handlePress: (id: string) => void;
}

const CustomList = ({ data, handlePress }: CustomListProps) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const renderItem = useCallback(
    ({ item }: { item: PLACE_INFO_TYPE | ANIMAL_INFO_TYPE }) => {
      return <CustomListItem item={item} handlePress={handlePress} />;
    },
    [handlePress],
  );

  const lastOffsetRef = useRef(0);
  const isHideRef = useRef(false);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentOffset = event.nativeEvent.contentOffset.y;
      const isScrollingDown = currentOffset > lastOffsetRef.current;

      if (currentOffset <= 0 && isHideRef.current) {
        isHideRef.current = false;
        navigation.setOptions({
          tabBarStyle: { display: 'flex' },
        });
      }

      if (Math.abs(currentOffset - lastOffsetRef.current) < 10) return;

      if (isScrollingDown && !isHideRef.current) {
        isHideRef.current = true;
        navigation.setOptions({
          tabBarStyle: { display: 'none' },
        });
      } else if (!isScrollingDown && isHideRef.current) {
        isHideRef.current = false;
        navigation.setOptions({
          tabBarStyle: { display: 'flex' },
        });
      }

      lastOffsetRef.current = currentOffset;
    },
    [navigation],
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      ListFooterComponent={() => <View style={styles.footer} />}
    />
  );
};

export default CustomList;

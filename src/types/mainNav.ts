import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type MainStackParamList = {
  LocationsScreen: undefined;
  AnimalsScreen: undefined;
  StoriesScreen: undefined;
  QuizScreen: undefined;
  MapScreen: { placeId?: string };
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;

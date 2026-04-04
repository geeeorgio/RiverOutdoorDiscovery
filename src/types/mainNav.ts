import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type MainStackParamList = {
  LocationsScreen: undefined;
  AnimalsScreen: undefined;
  StoriesScreen: undefined;
  QuizScreen: undefined;
  MapScreen: undefined;
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;

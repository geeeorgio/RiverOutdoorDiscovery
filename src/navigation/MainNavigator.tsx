import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTabBar } from 'src/components';
import {
  AnimalsScreen,
  LocationsScreen,
  MapScreen,
  QuizScreen,
  StoriesScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainStack = createBottomTabNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        sceneStyle: {
          backgroundColor: 'transparent',
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="LocationsScreen"
    >
      <MainStack.Screen name="LocationsScreen" component={LocationsScreen} />
      <MainStack.Screen name="AnimalsScreen" component={AnimalsScreen} />
      <MainStack.Screen name="StoriesScreen" component={StoriesScreen} />
      <MainStack.Screen name="QuizScreen" component={QuizScreen} />
      <MainStack.Screen name="MapScreen" component={MapScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;

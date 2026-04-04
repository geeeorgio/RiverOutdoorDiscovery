import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { useGameContext } from 'src/hooks/useGameContext';
import { PlaceDetailsScreen } from 'src/screens';
import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isOnboardingCompleted, isContextLoading } = useGameContext();

  if (isContextLoading) return null;

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        animation: 'fade',
        gestureEnabled: false,
      }}
    >
      {isOnboardingCompleted ? (
        <>
          <RootStack.Screen name="MainStack" component={MainNavigator} />
          <RootStack.Screen
            name="PlaceDetailsScreen"
            component={PlaceDetailsScreen}
          />
        </>
      ) : (
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;

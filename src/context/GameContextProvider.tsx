import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { CONTEXT_TYPE } from 'src/types';

import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const GameContext = createContext<CONTEXT_TYPE | null>(null);

const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingDone, setIsOnboardingDone] = useState(false);

  useEffect(() => {
    const init = async () => {
      const savedOnboarding = await getItemFromStorage<boolean>(
        'is_onboarding_completed',
      );

      if (savedOnboarding !== null) {
        setIsOnboardingDone(savedOnboarding);
      }

      setIsLoading(false);
    };

    init();
  }, []);

  const setIsOnboardingCompleted = useCallback(async (value: boolean) => {
    setIsOnboardingDone(value);
    await setItemInStorage('is_onboarding_completed', value);
  }, []);

  const value = useMemo(
    () => ({
      isContextLoading: isLoading,
      isOnboardingCompleted: isOnboardingDone,
      setIsOnboardingCompleted,
    }),
    [isLoading, isOnboardingDone, setIsOnboardingCompleted],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContextProvider;

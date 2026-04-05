import { MAIN_BACKGROUND, ONBD_IMAGES, QUIZ_TYPES_IMAGES } from './images';

import type { TRAVELER_DESCRIPTION_OBJECT_TYPE } from 'src/types';

export const ONBOARDING_INFO = {
  onboarding_1: {
    index: 0,
    title: 'Welcome!',
    description:
      'Your personal guide to exploring nature with confidence and purpose.',
    image: ONBD_IMAGES.onbd_0,
    buttonText: 'Begin',
  },
  onboarding_2: {
    index: 1,
    description:
      'Every explorer is different. Answer a few questions to find your ideal way to experience the outdoors.',
    image: ONBD_IMAGES.onbd_1,
    buttonText: 'Take the Quiz',
  },
  onboarding_3: {
    index: 2,
    description:
      'Access curated locations — rivers, mountains, and open landscapes — tailored to your preferences.',
    image: ONBD_IMAGES.onbd_2,
    buttonText: 'Explore Locations',
  },
  onboarding_4: {
    index: 3,
    description:
      'Learn about wildlife you may encounter. Understand nature before stepping into it.',
    image: ONBD_IMAGES.onbd_3,
    buttonText: 'View Wildlife',
  },
  onboarding_5: {
    index: 4,
    description:
      'Respect nature. Leave no trace. Be part of preserving the wild for those who come after you.',
    image: ONBD_IMAGES.onbd_4,
    buttonText: 'Get Started',
  },
};

export const LOCATIONS_SCREEN_INFO = {
  image: MAIN_BACKGROUND,
  description: 'Take the survey and find out who you are in tourism!',
  buttonText: 'Start Quiz',
};

export const QUIZ_SCREEN_INFO = {
  image: ONBD_IMAGES.onbd_1,
  title: 'Traveler Types',
  description: 'Take the survey and find out what type of vacationer you are!',
  buttonText: 'Start Quiz',
};

export const TRAVEL_TYPES_INFO: TRAVELER_DESCRIPTION_OBJECT_TYPE = {
  explorer: {
    title: 'The Explorer',
    description:
      'You seek discovery and new experiences. You enjoy trying different locations, learning about nature, and stepping slightly outside your comfort zone.',
    traits: [
      'Curious',
      'Balanced between safety and adventure',
      'Open to new environments',
    ],
    image: QUIZ_TYPES_IMAGES.explorer,
  },
  adventurer: {
    title: 'The Adventurer',
    description:
      'You thrive on challenge and intensity. Difficult trails, remote locations, and unpredictable situations excite you. The wild is where you feel most alive.',
    traits: [
      'High risk tolerance',
      'Loves remote and extreme environments',
      'Enjoys pushing limits',
    ],
    image: QUIZ_TYPES_IMAGES.adventurer,
  },
  relaxer: {
    title: 'The Relaxer',
    description:
      'You prefer calm, peaceful experiences. Nature for you is about slowing down, enjoying the moment, and escaping stress.',
    traits: [
      'Low risk preference',
      'Enjoys comfort and simplicity',
      'Values scenery over challenge',
    ],
    image: QUIZ_TYPES_IMAGES.relaxer,
  },
};

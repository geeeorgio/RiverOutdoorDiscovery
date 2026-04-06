import type { ImageSourcePropType } from 'react-native';

export const PLACES_TYPES_LIST = ['Rivers', 'Mountains', 'Meadows'] as const;
export type FILTER_TYPE = (typeof PLACES_TYPES_LIST)[number];

export const TRAVELER_TYPES_LIST = [
  'explorer',
  'adventurer',
  'relaxer',
] as const;
export type TRAVELER_TYPE = (typeof TRAVELER_TYPES_LIST)[number];

export type TRAVELER_DESCRIPTION_OBJECT_TYPE = Record<
  TRAVELER_TYPE,
  {
    title: string;
    description: string;
    traits: string[];
    image: ImageSourcePropType;
  }
>;

export type QUIZ_QUESTION_TYPE = {
  id: string;
  question: string;
  options: {
    option: string;
    type: TRAVELER_TYPE;
  }[];
  selectedOptions?: TRAVELER_TYPE[];
};

export type PLACE_INFO_TYPE = {
  id: string;
  type: FILTER_TYPE;
  title: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  image: ImageSourcePropType;
};

export type ANIMAL_INFO_TYPE = {
  id: string;
  type: FILTER_TYPE;
  name: string;
  description: string;
  image: ImageSourcePropType;
};

export type STORY_TYPE = {
  id: string;
  title: string;
  description: string;
};

export type QUIZ_STATUS = 'idle' | 'inProgress' | 'completed';

import type { SvgProps } from 'react-native-svg';

import AnimalsIcon from './AnimalsIcon';
import BackIcon from './BackIcon';
import LocationsIcon from './LocationsIcon';
import MapIcon from './MapIcon';
import MarkerIcon from './MarkerIcon';
import QuizIcon from './QuizIcon';
import SearchIcon from './SearchIcon';
import ShareIcon from './ShareIcon';
import StoriesIcon from './StoriesIcon';

import type { MainStackParamList } from 'src/types';

export const ICON_NAMES = [
  'animals',
  'back',
  'locations',
  'map',
  'marker',
  'quiz',
  'search',
  'share',
  'stories',
] as const;

export type IconName = (typeof ICON_NAMES)[number];

export const ICONS_MAP: Record<IconName, React.FC<SvgProps>> = {
  animals: AnimalsIcon,
  back: BackIcon,
  locations: LocationsIcon,
  map: MapIcon,
  marker: MarkerIcon,
  quiz: QuizIcon,
  search: SearchIcon,
  share: ShareIcon,
  stories: StoriesIcon,
};

export const TAB_BAR_ICONS_MAP: Record<
  keyof MainStackParamList,
  React.FC<SvgProps>
> = {
  AnimalsScreen: AnimalsIcon,
  LocationsScreen: LocationsIcon,
  MapScreen: MapIcon,
  QuizScreen: QuizIcon,
  StoriesScreen: StoriesIcon,
};

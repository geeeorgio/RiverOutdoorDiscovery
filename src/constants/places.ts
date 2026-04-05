import { PLACES_IMAGES } from './images';

import type { PLACE_INFO_TYPE } from 'src/types';

export const PLACES_LIST: PLACE_INFO_TYPE[] = [
  {
    id: 'bow_river',
    type: 'Rivers',
    title: 'Bow River',
    description:
      'Flowing through the heart of the Canadian Rockies, this river offers crystal-clear waters and breathtaking alpine scenery. It’s perfect for kayaking, fishing, or quiet walks along its banks.',
    coordinates: {
      latitude: 51.1784,
      longitude: -115.5708,
    },
    image: PLACES_IMAGES.Bow_River,
  },
  {
    id: 'athabasca_river',
    type: 'Rivers',
    title: 'Athabasca River',
    description:
      'A powerful glacial river known for its strong currents and dramatic surroundings. Located in Jasper, it provides a raw and immersive wilderness experience.',
    coordinates: {
      latitude: 52.8737,
      longitude: -118.0814,
    },
    image: PLACES_IMAGES.Athabasca_River,
  },
  {
    id: 'nahanni_river',
    type: 'Rivers',
    title: 'Nahanni River',
    description:
      'Remote and untouched, this river flows through deep canyons and wild landscapes. A true destination for experienced adventurers.',
    coordinates: {
      latitude: 61.561,
      longitude: -125.606,
    },
    image: PLACES_IMAGES.Nahanni_River,
  },
  {
    id: 'french_river',
    type: 'Rivers',
    title: 'French River',
    description:
      'A calm and historic river ideal for canoeing and slow exploration. Surrounded by dense forests and peaceful silence.',
    coordinates: {
      latitude: 46.0,
      longitude: -80.5,
    },
    image: PLACES_IMAGES.French_River,
  },
  {
    id: 'yukon_river',
    type: 'Rivers',
    title: 'Yukon River',
    description:
      'A legendary northern river stretching through vast wilderness. Known for its scale, solitude, and historical significance.',
    coordinates: {
      latitude: 64.0601,
      longitude: -139.4328,
    },
    image: PLACES_IMAGES.Yukon_River,
  },
  {
    id: 'whistler_mountain',
    type: 'Mountains',
    title: 'Whistler Mountain',
    description:
      'A popular destination offering scenic trails and panoramic alpine views. Accessible yet impressive.',
    coordinates: {
      latitude: 50.059,
      longitude: -122.958,
    },
    image: PLACES_IMAGES.Whistler_Mountain,
  },
  {
    id: 'mount_robson',
    type: 'Mountains',
    title: 'Mount Robson',
    description:
      'The highest peak in the Canadian Rockies. Massive, imposing, and often hidden behind clouds.',
    coordinates: {
      latitude: 53.1147,
      longitude: -119.1562,
    },
    image: PLACES_IMAGES.Mount_Robson,
  },
  {
    id: 'gros_morne_mountains',
    type: 'Mountains',
    title: 'Gros Morne Mountains',
    description:
      'Unique coastal mountains shaped by ancient geological forces. A rare combination of ocean and peaks.',
    coordinates: {
      latitude: 49.649,
      longitude: -57.733,
    },
    image: PLACES_IMAGES.Gros_Morne_Mountains,
  },
  {
    id: 'mount_assiniboine',
    type: 'Mountains',
    title: 'Mount Assiniboine',
    description:
      'A perfectly shaped peak often called the “Matterhorn of the Rockies.” One of the most iconic views in Canada.',
    coordinates: {
      latitude: 50.8625,
      longitude: -115.6545,
    },
    image: PLACES_IMAGES.Mount_Assiniboine,
  },
  {
    id: 'cypress_mountain',
    type: 'Mountains',
    title: 'Cypress Mountain',
    description:
      'A scenic mountain overlooking Vancouver and the ocean. Ideal for short hikes and sunset views.',
    coordinates: {
      latitude: 49.395,
      longitude: -123.204,
    },
    image: PLACES_IMAGES.Cypress_Mountain,
  },
  {
    id: 'sunshine_meadows',
    type: 'Meadows',
    title: 'Sunshine Meadows',
    description:
      'A vibrant alpine meadow filled with wildflowers and open views. One of the most picturesque areas in Banff.',
    coordinates: {
      latitude: 51.115,
      longitude: -115.763,
    },
    image: PLACES_IMAGES.Sunshine_Meadows,
  },
  {
    id: 'mount_revelstoke_meadows',
    type: 'Meadows',
    title: 'Mount Revelstoke Meadows',
    description:
      'Rich in plant life, these meadows offer peaceful surroundings and diverse ecosystems.',
    coordinates: {
      latitude: 51.0,
      longitude: -118.195,
    },
    image: PLACES_IMAGES.Mount_Revelstoke_Meadows,
  },
  {
    id: 'prairie_grasslands',
    type: 'Meadows',
    title: 'Prairie Grasslands',
    description:
      'Endless open landscapes under vast skies. A quiet and meditative environment.',
    coordinates: {
      latitude: 49.633,
      longitude: -107.8,
    },
    image: PLACES_IMAGES.Prairie_Grasslands,
  },
  {
    id: 'tonquin_valley_meadows',
    type: 'Meadows',
    title: 'Tonquin Valley Meadows',
    description:
      'A remote valley surrounded by dramatic peaks. Perfect for solitude and deep nature immersion.',
    coordinates: {
      latitude: 52.664,
      longitude: -117.42,
    },
    image: PLACES_IMAGES.Tonquin_Valley_Meadows,
  },
  {
    id: 'okanagan_valley_fields',
    type: 'Meadows',
    title: 'Okanagan Valley Fields',
    description:
      'Warm, rolling fields and vineyards under soft sunlight. A more relaxed and gentle landscape.',
    coordinates: {
      latitude: 49.888,
      longitude: -119.496,
    },
    image: PLACES_IMAGES.Okanagan_Valley_Fields,
  },
];

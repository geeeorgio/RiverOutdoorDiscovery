import { memo, useCallback, useEffect, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import MarkerIcon from '../CustomIcons/MarkerIcon';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import darkMapStyle from 'src/constants/darkMapStyle.json';
import type { PLACE_INFO_TYPE } from 'src/types';
import { hp, wp } from 'src/utils';

interface MapComponentProps {
  place?: PLACE_INFO_TYPE;
  list?: PLACE_INFO_TYPE[];
  onCloseDetailsPress?: () => void;
  onDetailPress?: (id: string) => void;
}

const MapComponent = ({
  place,
  list,
  onCloseDetailsPress,
  onDetailPress,
}: MapComponentProps) => {
  const mapRef = useRef<MapView>(null);

  const fitToList = useCallback((items: PLACE_INFO_TYPE[]) => {
    if (items.length > 0 && mapRef.current) {
      mapRef.current.fitToCoordinates(
        items.map((p) => p.coordinates),
        {
          edgePadding: { top: 100, right: 50, bottom: 50, left: 50 },
          animated: true,
        },
      );
    }
  }, []);

  const handleMapReady = useCallback(() => {
    if (list && list.length > 0) fitToList(list);
  }, [list, fitToList]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (list && list.length > 0) {
      timeout = setTimeout(() => fitToList(list), 444);
      return () => clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [list, fitToList]);

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      customMapStyle={darkMapStyle}
      onMapReady={handleMapReady}
      onPress={onCloseDetailsPress}
      style={styles.map}
      toolbarEnabled={false}
      region={
        place
          ? {
              latitude: place.coordinates.latitude,
              longitude: place.coordinates.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }
          : undefined
      }
    >
      {place && (
        <Marker
          key={`place-${place.id}`}
          coordinate={place.coordinates}
          onPress={() => onDetailPress?.(place.id)}
        >
          <MarkerIcon color={COLORS.white} width={wp(26)} height={hp(44)} />
        </Marker>
      )}

      {!place &&
        list?.map((p) => (
          <Marker
            key={`list-${p.id}`}
            coordinate={p.coordinates}
            onPress={() => onDetailPress?.(p.id)}
          >
            <MarkerIcon color={COLORS.white} width={wp(26)} height={hp(44)} />
          </Marker>
        ))}
    </MapView>
  );
};

export default memo(MapComponent);

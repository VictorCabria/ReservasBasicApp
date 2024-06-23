import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {globalStyles} from '../styles/styles';

interface Props {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [region, setRegion] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [routeInfo, setRouteInfo] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Permiso de ubicación',
              message: 'Esta aplicación necesita acceder a tu ubicación.',
              buttonNeutral: 'Pregúntame después',
              buttonNegative: 'Cancelar',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Permiso de ubicación concedido');
          } else {
            console.log('Permiso de ubicación denegado');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };

    requestLocationPermission();

    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        const currentRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setRegion(currentRegion);
      },
      error => console.log(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  const handleMapPress = (event: any) => {
    const {coordinate} = event.nativeEvent;
    setSelectedLocation(coordinate);
  };

  const handleConfirmReservation = () => {
    Alert.alert('Reserva Confirmada');
    if (routeInfo) {
      dispatch({
        type: 'SET_RESERVATION_INFO',
        payload: {
          distance: routeInfo.distance.toFixed(2),
          duration: Math.ceil(routeInfo.duration),
        },
      });
      navigation.navigate('Confirmation');
    }
  };

  return (
    <View style={globalStyles.container}>
      {region && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={globalStyles.map}
          initialRegion={region}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onPress={handleMapPress}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
          {selectedLocation && (
            <Marker coordinate={selectedLocation} pinColor="blue" />
          )}
          {selectedLocation && (
            <MapViewDirections
              origin={region}
              destination={selectedLocation}
              apikey="AIzaSyD5dcI_Exy93OeCI5PKM1Vat-RyASxuHa4"
              strokeWidth={5}
              strokeColor="blue"
              onReady={result => {
                setRouteInfo({
                  distance: result.distance,
                  duration: result.duration,
                });
              }}
            />
          )}
        </MapView>
      )}

      {routeInfo && (
        <View style={globalStyles.reservationContainer}>
          <Text style={globalStyles.reservationText}>
            Distancia: {routeInfo.distance.toFixed(2)} km
          </Text>
          <Text style={globalStyles.reservationText}>
            Duración estimada: {Math.ceil(routeInfo.duration)} min
          </Text>
          <Button
            title="Confirmar reserva"
            onPress={handleConfirmReservation}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

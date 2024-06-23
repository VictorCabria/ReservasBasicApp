import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {globalStyles} from '../styles/styles';
import {RootState} from '../store/store';

const ConfirmationScreen: React.FC = () => {
  const reservationInfo = useSelector((state: RootState) => state.reservation);

  return (
    <View style={globalStyles.container}>
      {reservationInfo ? (
        <>
          <Text style={globalStyles.reservationText}>
            Distancia: {reservationInfo.distance} km
          </Text>
          <Text style={globalStyles.reservationText}>
            Duración: {reservationInfo.duration} min
          </Text>
        </>
      ) : (
        <Text style={globalStyles.reservationText}>
          No hay información de reserva disponible.
        </Text>
      )}
    </View>
  );
};

export default ConfirmationScreen;

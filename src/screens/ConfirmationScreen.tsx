import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import {globalStyles} from '../styles/styles';
import {RootState} from '../store/store';

interface ConfirmationScreenProps {
  navigateBack: () => void; // Propiedad para manejar la navegación de regreso
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({
  navigateBack,
}) => {
  const reservationInfo = useSelector((state: RootState) => state.reservation);
  const [status, setStatus] = useState('En espera');
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmed, setConfirmed] = useState(false); // Estado para manejar la confirmación

  const handleConfirmReservation = () => {
    setStatus('Reservada');
    setModalVisible(true);
    setConfirmed(true); // Confirmar reserva y mostrar el botón de regreso
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleGoBack = () => {
    setConfirmed(false); // Volver a poner en falso para mostrar el botón de confirmación
    navigateBack(); // Llamar a la función de navegación de regreso
  };

  return (
    <View style={globalStyles.container}>
      {reservationInfo ? (
        <>
          <Text
            style={[
              globalStyles.reservationText,
              status === 'En espera'
                ? globalStyles.textRed
                : globalStyles.textGreen,
            ]}>
            Distancia: {reservationInfo.distance} km
          </Text>
          <Text
            style={[
              globalStyles.reservationText,
              status === 'En espera'
                ? globalStyles.textRed
                : globalStyles.textGreen,
            ]}>
            Duración: {reservationInfo.duration} min
          </Text>
          <Text
            style={[
              globalStyles.reservationText,
              status === 'En espera'
                ? globalStyles.textRed
                : globalStyles.textGreen,
            ]}>
            Estado: {status}
          </Text>
          {status === 'En espera' && !confirmed && (
            <TouchableOpacity
              style={globalStyles.confirmButton}
              onPress={handleConfirmReservation}>
              <Text style={globalStyles.confirmButtonText}>
                Confirmar Reserva
              </Text>
            </TouchableOpacity>
          )}
          {confirmed && (
            <TouchableOpacity
              style={globalStyles.confirmButton}
              onPress={handleGoBack}>
              <Text style={globalStyles.confirmButtonText}>
                Regresar a la pantalla anterior
              </Text>
            </TouchableOpacity>
          )}
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={closeModal}>
            <View style={globalStyles.modalBackground}>
              <View style={globalStyles.modalContainer}>
                <Text style={globalStyles.modalText}>¡Reserva Confirmada!</Text>
                <Button title="Cerrar" onPress={closeModal} color="#841584" />
              </View>
            </View>
          </Modal>
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

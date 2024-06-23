import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containermap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
    backgroundColor: '#2b9bc7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    width: 350,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#1d78f0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: 350,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  Text: {
    color: 'white',
    fontSize: 18,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    alignItems: 'center',
    color: '#666',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  reservationText: {
    fontSize: 18,
    marginBottom: 10,
  },
  textRed: {
    color: 'red', // Texto en color rojo
  },
  textGreen: {
    color: 'green', // Texto en color verde
  },

  confirmButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff', // Color de fondo azul, ajusta según tus preferencias
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#ffffff', // Texto blanco para el botón de confirmación
    fontSize: 16,
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente oscuro para el modal
    padding: 20,
  },
  map: {
    width: 600,
    height: '100%',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5, // Sombra para la apariencia de elevación en Android
  },
  reservationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});

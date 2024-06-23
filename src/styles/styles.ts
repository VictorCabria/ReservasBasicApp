// src/styles/styles.ts
import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300, // Ocupa todo el ancho disponible
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: 300, // Ocupa todo el ancho disponible
    backgroundColor: '#007bff', // Color de fondo del botón
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff', // Color del texto del botón
    fontSize: 16,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: 600,
    height: '100%',
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
  reservationText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

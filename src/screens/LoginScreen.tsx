// src/screens/LoginScreen.tsx
import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import {globalStyles} from '../styles/styles'; // Importa los estilos globales

interface Props {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Por favor ingresa email y contraseña.');
      return;
    }

    if (!isValidEmailFormat(email)) {
      Alert.alert('Error', 'Por favor ingresa un email válido.');
      return;
    }

    if (email === 'victorjosecabria@gmail.com' && password === '123456') {
      Alert.alert('Éxito', 'Inicio de sesión exitoso!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Credenciales incorrectas.');
    }
  };

  const isValidEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

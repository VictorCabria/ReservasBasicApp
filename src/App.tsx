import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/store';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import {globalStyles} from '../src/styles/styles';

enum AppScreens {
  LOGIN = 'Login',
  HOME = 'Home',
  CONFIRMATION = 'Confirmation',
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = React.useState<AppScreens>(
    AppScreens.LOGIN,
  );

  const navigateToHome = () => {
    setCurrentScreen(AppScreens.HOME);
  };

  const navigateToConfirmation = () => {
    setCurrentScreen(AppScreens.CONFIRMATION);
  };

  const navigateBack = () => {
    setCurrentScreen(AppScreens.HOME); // Cambia al estado anterior (pantalla Home en este caso)
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreens.LOGIN:
        return <LoginScreen navigation={{navigate: navigateToHome}} />;
      case AppScreens.HOME:
        return <HomeScreen navigation={{navigate: navigateToConfirmation}} />;
      case AppScreens.CONFIRMATION:
        return <ConfirmationScreen navigateBack={navigateBack} />;
      default:
        return null;
    }
  };

  return (
    <Provider store={store}>
      <View style={globalStyles.container}>{renderScreen()}</View>
    </Provider>
  );
};

export default App;

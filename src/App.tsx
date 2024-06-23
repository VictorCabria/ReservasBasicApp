import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/store';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

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

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreens.LOGIN:
        return <LoginScreen navigation={{navigate: navigateToHome}} />;
      case AppScreens.HOME:
        return <HomeScreen navigation={{navigate: navigateToConfirmation}} />;
      case AppScreens.CONFIRMATION:
        return <ConfirmationScreen />;
      default:
        return null;
    }
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>{renderScreen()}</View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

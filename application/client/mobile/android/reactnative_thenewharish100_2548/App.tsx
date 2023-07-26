import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
const navTheme = DefaultTheme;
navTheme.colors.background = 'white'; //Global App backgroundColor


const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
        <TabNavigator />
    </NavigationContainer>
  );
};

export default App;

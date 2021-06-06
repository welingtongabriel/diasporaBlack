import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from './src/screens/Preload';
import Login from './src/screens/Login';
import Registro from './src/screens/Register';
import Agenda from './src/screens/Schedule';

const Stack = createStackNavigator();

export default function diasporaBlack() {
 return (
  <NavigationContainer>
    <Stack.Navigator 
    initialRouteName="Login"
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Preload" component={Preload}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Registro}/>
      <Stack.Screen name="Schedule" component={Agenda} />
    </Stack.Navigator>

  </NavigationContainer>
  
  );
}

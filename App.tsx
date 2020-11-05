import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Quiz from './screens/Quiz';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="QuizScreen" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

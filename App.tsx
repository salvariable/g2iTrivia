import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Results from "./screens/Results";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        // Avoid enabling header and "back" gesture to prevent stack breaks
        headerMode={"none"}
        screenOptions={{
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

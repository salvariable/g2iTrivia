import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { QuestionsProvider } from "./api/ContextProvider";

import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Results from "./screens/Results";

export default function App() {
  const Stack = createStackNavigator();

  return (
    // Context provider: stores responded questions with user's input and correct answers
    <QuestionsProvider>
      <NavigationContainer>
        <Stack.Navigator
          // Avoid enabling header and "go back" gesture to prevent stack / screen breaks
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
    </QuestionsProvider>
  );
}

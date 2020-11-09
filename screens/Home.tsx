import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the Trivia Challenge!</Text>

      <Text>You will be presented with 10 True or False questions.</Text>

      <Text>Can you score 100%?</Text>

      <Text onPress={() => navigation.navigate("Quiz")}>BEGIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  welcome: { fontWeight: "bold" },
});

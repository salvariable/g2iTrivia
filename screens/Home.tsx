import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

export interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.welcome, styles.intro]}>
        Welcome to the Trivia Challenge!
      </Text>

      <Text style={styles.intro}>
        You will be presented with 10 True or False questions.
      </Text>

      <Text style={styles.intro}>Can you score 100%?</Text>

      <Text
        style={styles.intro}
        onPress={() => navigation.navigate("Quiz")}
      >
        BEGIN
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 36,
  },
  welcome: { fontWeight: "bold" },
  intro: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default Home;

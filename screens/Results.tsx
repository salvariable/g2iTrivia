import React from "react";
import { FlatList, SafeAreaView, View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { CommonActions } from "@react-navigation/native";

export default ({
  navigation,
  route: {
    params: { results },
  },
}) => {
  const correctAnswers = results.filter((value) => value.correct === value.answer);

  const renderAnswer = ({ question, correct, answer }) => {
    const right = <Image style={styles.result} source={require("../assets/right.png")} />;

    const wrong = <Image style={styles.result} source={require("../assets/wrong.png")} />;

    return (
      <View style={styles.element}>
        <View>{correct === answer ? right : wrong}</View>
        <Text style={{ flex: 1 }}>{question}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        You scored {"\n"} {correctAnswers.length}
        {" /"} {results.length}
      </Text>
      <FlatList
        data={results}
        renderItem={({ item }) => renderAnswer(item)}
        keyExtractor={(item) => item.question}
        contentContainerStyle={{ marginTop: 24, marginBottom: 24 }}
      />
      <Text
        style={styles.button}
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              routes: [{ name: "Home" }],
            })
          )
        }
      >
        PLAY AGAIN?
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  element: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  result: {
    height: 48,
    width: 48,
    margin: 16,
  },
  button: {
    marginBottom: 24,
    marginTop: 16,
    alignSelf: "center",
  },
});

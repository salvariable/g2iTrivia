import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import { useCurrentAnswers } from "../api/ContextProvider";
import { UserAnswer } from "../types/objects";
export interface Props {
  navigation: any;
}

const Results: React.FC<Props> = ({ navigation }) => {
  const { userAnswers, resetAnswers } = useCurrentAnswers();

  const correctAnswers = userAnswers.filter(
    (value: UserAnswer) => value.correct === value.answer
  );

  const renderAnswer = ({
    question,
    correct,
    answer,
  }: UserAnswer) => {
    return (
      <View style={styles.element}>
        <View>
          {correct === answer ? (
            <Image
              style={styles.result}
              source={require("../assets/right.png")}
            />
          ) : (
            <Image
              style={styles.result}
              source={require("../assets/wrong.png")}
            />
          )}
        </View>
        <Text style={{ flex: 1 }}>{question}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        You scored {"\n"} {correctAnswers.length}
        {" /"} {userAnswers.length}
      </Text>
      <FlatList
        data={userAnswers}
        renderItem={({ item }) => renderAnswer(item)}
        keyExtractor={(item) => item.question}
        contentContainerStyle={styles.resultsContainer}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          resetAnswers();
          navigation.dispatch(
            CommonActions.reset({
              routes: [{ name: "Home" }],
            })
          );
        }}
      >
        <Text>PLAY AGAIN?</Text>
      </TouchableOpacity>
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
  resultsContainer: {
    padding: 16,
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
    marginTop: 16,
    alignSelf: "center",
    position: "relative",
    bottom: 0,
  },
});

export default Results;

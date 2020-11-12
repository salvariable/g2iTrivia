import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BooleanButton from "./BooleanButton";
import { QuestionObject } from "../types/objects";

export interface Props {
  item: QuestionObject;
  index: number;
  triviaLength: number;
  saveAnswer: Function;
}

const QuestionLayout: React.FC<Props> = ({
  item,
  index,
  triviaLength,
  saveAnswer,
}) => {
  const { category, question, correct_answer } = item;
  return (
    <View style={styles.container} key={question}>
      <Text style={styles.title}>{category}</Text>

      <View style={styles.frame}>
        <Text style={styles.question}>{question}</Text>
      </View>

      <Text style={styles.indicator}>
        {index + 1} of {triviaLength}
      </Text>

      <View style={styles.buttonContainer}>
        <BooleanButton
          option={false}
          onPress={() =>
            saveAnswer({
              question,
              correct: correct_answer,
              answer: "False",
            })
          }
        />
        <BooleanButton
          option={true}
          onPress={() =>
            saveAnswer({
              question,
              correct: correct_answer,
              answer: "True",
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 24,
    width: Dimensions.get("window").width - 16,
  },
  frame: {
    flex: 1,
    margin: 8,
    padding: 32,
    borderWidth: 1,
    width: Dimensions.get("window").width - 16,
    justifyContent: "center",
  },
  question: {
    fontSize: 24,
    textAlign: "center",
  },
  indicator: {
    flex: 1,
    alignSelf: "center",
    fontSize: 24,
    margin: 16,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default QuestionLayout;

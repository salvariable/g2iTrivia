import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import QuestionLayout from "../components/QuestionLayout";
import { QuestionObject } from "../types/objects";
import { useCurrentAnswers } from "../api/ContextProvider";

export interface Props {
  navigation: any;
}

const Quiz: React.FC<Props> = ({ navigation }) => {
  const [trivia, setTrivia] = useState<Array<object>>([]);

  const { userAnswers, saveAnswer } = useCurrentAnswers();

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    )
      .then((response) => response.json())
      .then((json) => setTrivia(json.results))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderQuestion = (item: QuestionObject, index: number) => {
    return (
      <QuestionLayout
        item={item}
        index={index}
        triviaLength={trivia.length}
        saveAnswer={handleQuestionAnswer}
      />
    );
  };

  const handleQuestionAnswer = (
    question: string,
    correct: string,
    answer: string
  ) => {
    saveAnswer(question, correct, answer);
    setTrivia(
      trivia.filter(
        (element: object) => question !== element.question
      )
    );

    if (userAnswers.length >= 10) {
      navigation.navigate("Results");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={trivia}
        renderItem={({ item, index }) => renderQuestion(item, index)}
        keyExtractor={(item: QuestionObject) => item.question}
        extraData={userAnswers}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
    </SafeAreaView>
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
  frame: { alignItems: "center" },
  question: {
    flex: 1,
    fontSize: 24,
    borderWidth: 1,
    margin: 8,
    textAlign: "center",
    width: Dimensions.get("window").width - 16,
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

export default Quiz;

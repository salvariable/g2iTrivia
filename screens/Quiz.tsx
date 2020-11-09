import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View, StyleSheet, Dimensions, Text } from "react-native";
import BooleanButton from "../components/BooleanButton";

const Quiz = ({ navigation }) => {
  const [trivia, setTrivia] = useState(null);
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then((response) => response.json())
      .then((json) => setTrivia(json.results))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderQuestion = (item, index) => {
    return (
      <View style={styles.container} key={item}>
        <Text style={styles.title}>{item.category}</Text>

        <Text style={styles.question}>{item.question}</Text>

        <Text key={item} style={styles.indicator}>
          {index + 1} of {trivia.length}
        </Text>

        <View style={styles.buttonContainer}>
          <BooleanButton
            option={false}
            onPress={() => saveResult(item.question, item.correct_answer, "False")}
          />
          <BooleanButton
            option={true}
            onPress={() => saveResult(item.question, item.correct_answer, "True")}
          />
        </View>
      </View>
    );
  };

  const saveResult = (question, correct, answer) => {
    setResults((prevState) => {
      const resultsArray = prevState;
      resultsArray.push({ question, correct, answer });

      setTrivia(trivia.filter((element) => question !== element.question));

      if (results.length >= 10) {
        return navigation.navigate("Results", { results: resultsArray });
      }

      return resultsArray;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={trivia}
        renderItem={({ item, index }) => renderQuestion(item, index)}
        keyExtractor={(item) => item.question}
        extraData={results}
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

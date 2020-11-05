import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [trivia, setTrivia] = useState([]);

  useEffect(() => {

    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then((response) => response.json())
    .then((json) => {
      setTrivia(json.results);
    })
    .catch((error) => {
      console.error(error);
    });

  }, [])

  return (
    <View style={styles.container}>
      <Text>
        {trivia.length ? trivia.map((element) => element.question) : "Open up App.tsx to start working on your app!"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

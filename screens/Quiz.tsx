import React, {useEffect, useState} from 'react';
import {View, Text} from "react-native";
import Question from '../components/Question';

export default () => {

    const [trivia, setTrivia] = useState(null);

    useEffect(() => {
  
      fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((response) => response.json())
      .then((json) => {
          console.log("====== res", json.results)
        setTrivia(json.results);
      })
      .catch((error) => {
        console.error(error);
      });
  
    }, [])

    

    return (
        <View style={{flex: 1, justifyContent: "space-around", alignItems: "center"}}>
            {trivia && trivia.map((element, index) => <Question category={element.category} sentence={element.question} index={index + 1} triviaLength={trivia.length} /> )}
        </View>
    )
}
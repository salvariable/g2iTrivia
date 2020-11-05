import React from 'react';
import {View, Text} from "react-native";

export default ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: "space-around", alignItems: "center"}}>
            <Text style={{fontWeight: "bold"}}>
                Welcome to the Trivia Challenge!
            </Text>
            <Text>
                You will be presented with 10 True or False questions.
            </Text>
            <Text>
                Can you score 100%?
            </Text>
            <Text onPress={() => navigation.navigate("QuizScreen")}>
                BEGIN
            </Text>
        </View>
    )
}
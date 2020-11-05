import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export interface Props {
    category: string,
    sentence: string,
    index: number,
    triviaLength: number, 
  }

const Question = ({category, sentence, index, triviaLength}) => {
    return (
        <View style={styles.container}>
            {/* Question goes inside View element, index goes at foot */}
            <Text>
                {category}
            </Text>
            <View style={styles.questionBox}>
                <Text>
                    {sentence}
                </Text>
            </View>
            <View>
                <Text>
                    {index} of {triviaLength}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    },
    questionBox: {
        borderWidth: 1,
        padding: 16
    }
})

export default Question;

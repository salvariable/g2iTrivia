import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

export interface Props {
  option: boolean;
  onPress: () => void;
}

const BooleanButton: React.FC<Props> = ({ option, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.button,
          { backgroundColor: option === true ? "green" : "red" },
        ]}
      >
        <Text>{option === true ? "TRUE" : "FALSE"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 24,
  },
});

export default BooleanButton;

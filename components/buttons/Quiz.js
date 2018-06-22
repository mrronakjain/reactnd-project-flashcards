import React from "react";
import { TouchableOpacity, Text, Platform } from "react-native";
import ButtonStyles from "../../components/buttons/buttonstyles";
const styles = ButtonStyles;
export function CorrectBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={
        Platform.OS === "ios" ? styles.iosCorrectBtn : styles.androidCorrectBtn
      }
      onPress={onPress}
    >
      <Text style={styles.correctBtnText}>Correct</Text>
    </TouchableOpacity>
  );
}

export function IncorrectBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={
        Platform.OS === "ios"
          ? styles.iosIncorrectBtn
          : styles.androidIncorrectBtn
      }
      onPress={onPress}
    >
      <Text style={styles.incorrectBtnText}>Incorrect</Text>
    </TouchableOpacity>
  );
}

export function BackBtn({ onPress, text }) {
  return (
    <TouchableOpacity
      style={Platform.OS === "ios" ? styles.iosBackBtn : styles.androidBackBtn}
      onPress={onPress}
    >
      <Text style={styles.backBtnText}>{text}</Text>
    </TouchableOpacity>
  );
}

export function QuesToggleBtn({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.quesToggleBtn}>{text}</Text>
    </TouchableOpacity>
  );
}

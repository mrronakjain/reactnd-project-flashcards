import React from "react";
import { TouchableOpacity, Text, Platform } from "react-native";
import ButtonStyles from "../../components/buttons/buttonstyles";
const styles = ButtonStyles;
export function QuizBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === "ios" ? styles.iosQuizBtn : styles.androidQuizBtn}
      onPress={onPress}
    >
      <Text style={styles.quizBtnText}>Start Quiz</Text>
    </TouchableOpacity>
  );
}

export function CardBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === "ios" ? styles.iosCardBtn : styles.androidCardBtn}
      onPress={onPress}
    >
      <Text style={styles.cardBtnText}>Add Card</Text>
    </TouchableOpacity>
  );
}

import React from "react";
import { TouchableOpacity, Text, Platform } from "react-native";
import ButtonStyles from "../../components/buttons/buttonstyles";
export function SubmitBtn({ onPress }) {
  const styles = ButtonStyles;
  return (
    <TouchableOpacity
      style={
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitBtn
      }
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>Submit</Text>
    </TouchableOpacity>
  );
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { purple, white, blue, gray, orange } from "../utils/colors";
import { addCardToDeck } from "../utils/deckstorage";

import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Platform
} from "react-native";

function SubmitBtn({ onPress }) {
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

export default class AddCard extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { question: "", answer: "" };
  }
  onQuestionChangeText = question => {
    this.setState({ question: question });
  };
  onAnswerChangeText = answer => {
    this.setState({ answer: answer });
  };
  submit = () => {
    const { title } = this.props.navigation.state.params;
    var question = this.state.question;
    var answer = this.state.answer;
    if (question && question.trim() != "" && answer && answer.trim() != "") {
      addCardToDeck(title, { question: question, answer: answer }).then(() => {
        this.setState({ question: "", answer: "" });
        this.props.navigation.state.params.refresh();
        this.props.navigation.goBack();
      }); 
    }
  };
  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: blue }}
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.titleLabel}>Question</Text>
          <TextInput
            style={styles.titleTextInput}
            onChangeText={this.onQuestionChangeText}
            value={this.state.question}
            returnKeyType="next"
            placeholder="Question"
          />
          <Text style={styles.titleLabel}>Answer</Text>
          <TextInput
            style={styles.titleTextInput}
            onChangeText={this.onAnswerChangeText}
            value={this.state.answer}
            returnKeyType="done"
            placeholder="Answer"
          />
        </View>
        <SubmitBtn onPress={this.submit} />
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
    alignItems: "stretch"
  },
  textWrapper: {
    marginBottom: 15
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  androidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  titleTextInput: {
    height: 40,
    borderColor: gray,
    borderWidth: 1,
    fontSize: 20,
    borderRadius: Platform.OS === "ios" ? 7 : 2,
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    backgroundColor: white,
    color: blue
  },
  inputContainer: {
    marginBottom: 20
  },
  titleLabel: {
    fontSize: 24,
    paddingBottom: 10,
    color: white
  },
  errorContainer: {
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    marginBottom: 20
  },
  errorLabel: {
    fontSize: 18,
    textAlign: "center",
    color: orange
  }
});

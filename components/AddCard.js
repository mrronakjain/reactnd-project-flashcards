import React, { Component } from "react";
import PropTypes from "prop-types";
import { Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import { SubmitBtn } from "../components/buttons/AddCard";
import { white, blue, gray, orange } from "../utils/colors";
import addCardToDeck from "../state/actions/decks/action.addCardToDeck";

import { View, Text, TextInput, StyleSheet, Platform } from "react-native";

class AddCard extends Component {
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
    const { question, answer } = this.state;
    const deckName = this.props.navigation.state.params.title;
    if (question && question.trim() != "" && answer && answer.trim() != "") {
      Keyboard.dismiss();
      this.setState({ question: "", answer: "" }, () => {
        this.props.addCardToDeck({ deckName, card: { question, answer } });
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
export default connect(
  null,
  { addCardToDeck }
)(AddCard);

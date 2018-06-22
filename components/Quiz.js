import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import getDeckQuestionsShuffled from "../state/selectors/decks/selector.getDeckQuestionsShuffled";
import { white, blue } from "../utils/colors";
import {
  CorrectBtn,
  IncorrectBtn,
  BackBtn,
  QuesToggleBtn
} from "../components/buttons/Quiz";
import { View, Text, StyleSheet } from "react-native";

class Quiz extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      questionNo: 1,
      quesView: true,
      quesAnsCorrect: 0
    };
  }

  onCorrect = () => {
    const { quesAnsCorrect, questionNo } = this.state;
    var ansCorrect = quesAnsCorrect + 1;
    var quesNo = questionNo + 1;
    this.setState({
      quesAnsCorrect: ansCorrect,
      questionNo: quesNo,
      quesView: true
    });
  };
  onIncorrect = () => {
    const { questionNo } = this.state;
    var quesNo = questionNo + 1;
    this.setState({ questionNo: quesNo, quesView: true });
  };
  onRestartQuiz = () => {
    this.setState({ questionNo: 1, quesAnsCorrect: 0, quesView: true });
  };
  onBackToDeck = () => {
    this.props.navigation.goBack();
  };
  onToggle = () => {
    const { quesView } = this.state;
    this.setState({ quesView: !quesView });
  };
  render() {
    const { questionNo, quesView, quesAnsCorrect } = this.state;
    const { questions } = this.props;
    var noOfQues = questions.length;
    var isComplete = questionNo > noOfQues;
    const { question, answer } = !isComplete
      ? questions[questionNo - 1]
      : { question: undefined, answer: undefined };
    var percentage = (quesAnsCorrect / noOfQues) * 100;
    return (
      <View style={styles.containerBg}>
        <View style={styles.container}>
          {!isComplete && (
            <Text style={styles.quesNoText}>
              {questionNo}/{noOfQues}
            </Text>
          )}
          <View style={styles.quesContainer}>
            {!isComplete ? (
              quesView ? (
                <Text style={styles.quesText}>{question}</Text>
              ) : (
                <Text style={styles.quesText}>{answer}</Text>
              )
            ) : (
              <Text style={styles.resultText}>
                You have answered {percentage}% correctly.
              </Text>
            )}
            {!isComplete && (
              <QuesToggleBtn
                onPress={this.onToggle}
                text={quesView ? "Show Answer" : "Show Question"}
              />
            )}
          </View>
          {!isComplete ? (
            <View style={styles.btnContainer}>
              <CorrectBtn onPress={this.onCorrect} />
              <IncorrectBtn onPress={this.onIncorrect} />
            </View>
          ) : (
            <View style={styles.btnContainer}>
              <BackBtn onPress={this.onRestartQuiz} text="Restart Quiz" />
              <BackBtn onPress={this.onBackToDeck} text="Back to Deck" />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBg: {
    flex: 1,
    backgroundColor: blue
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 10,
    marginRight: 10
  },
  quesContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  btnContainer: {
    justifyContent: "flex-start",
    alignItems: "center"
  },
  quesText: {
    fontSize: 40,
    fontWeight: "800",
    color: white
  },
  resultText: {
    fontSize: 20,
    color: white,
    marginTop: 30
  },
  quesNoText: {
    color: white,
    margin: 10
  }
});
const mapStateToProps = ({ decks }, props) => {
  const deckTitle = props.navigation.state.params.title;
  return { questions: getDeckQuestionsShuffled(decks, deckTitle) };
};
export default connect(mapStateToProps)(Quiz);

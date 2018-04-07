import React, { Component } from "react";
import { AppLoading } from "expo";
import PropTypes from "prop-types";
import { purple, white, blue, gray, orange, red, green } from "../utils/colors";
import { getDeck } from "../utils/deckstorage";

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform
} from "react-native";

function CorrectBtn({ onPress }) {
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

function IncorrectBtn({ onPress }) {
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

function BackBtn({ onPress, text }) {
  return (
    <TouchableOpacity
      style={Platform.OS === "ios" ? styles.iosBackBtn : styles.androidBackBtn}
      onPress={onPress}
    >
      <Text style={styles.backBtnText}>{text}</Text>
    </TouchableOpacity>
  );
}

function QuesToggleBtn({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.quesToggleBtn}>{text}</Text>
    </TouchableOpacity>
  );
}

export default class Quiz extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      deck: {},
      questionNo: 1,
      quesView: true,
      quesAnsCorrect: 0
    };
  }

  onCorrect = () => {
    const { quesAnsCorrect, questionNo } = this.state;
    var ansCorrect = quesAnsCorrect + 1;
    var quesNo = questionNo + 1;
    this.setState({ quesAnsCorrect: ansCorrect, questionNo: quesNo });
  };
  onIncorrect = () => {
    const { questionNo } = this.state;
    var quesNo = questionNo + 1;
    this.setState({ questionNo: quesNo });
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
  componentDidMount() {
    const { title } = this.props.navigation.state.params;
    getDeck(title).then(deck => {
      if (deck) {
        this.setState({ deck: deck, ready: true });
      }
    });
  }
  render() {
    const { ready, deck, questionNo, quesView, quesAnsCorrect } = this.state;
    if (ready === false) {
      return <AppLoading />;
    } else {
      var noOfQues = deck.questions.length;
      var isComplete = questionNo > noOfQues;
      var percentage = quesAnsCorrect / noOfQues * 100;
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
                  <Text style={styles.quesText}>
                    {deck.questions[questionNo - 1].question}
                  </Text>
                ) : (
                  <Text style={styles.quesText}>
                    {deck.questions[questionNo - 1].answer}
                  </Text>
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
  iosCorrectBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 160,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20
  },
  androidCorrectBtn: {
    backgroundColor: green,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 160,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  correctBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  iosIncorrectBtn: {
    backgroundColor: red,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 160,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20
  },
  androidIncorrectBtn: {
    backgroundColor: red,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 160,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  incorrectBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  iosBackBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 160,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20
  },
  androidBackBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 160,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  backBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  quesToggleBtn: {
    color: orange
  },
  quesNoText: {
    color: white,
    margin: 10
  }
});

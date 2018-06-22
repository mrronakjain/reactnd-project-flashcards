import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { white, blue } from "../utils/colors";
import getDeck from "../state/selectors/decks/selector.getDeck";
import { QuizBtn, CardBtn } from "../components/buttons/ViewDeck";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notifications";

import { View, Text, StyleSheet, Alert } from "react-native";

class ViewDeck extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
  }

  onAddCard = () => {
    const { navigate } = this.props.navigation;
    const { title } = this.props.deck;
    navigate("AddCard", {
      title: title
    });
  };
  onShowQuiz = () => {
    const { navigate } = this.props.navigation;
    const { title, questions } = this.props.deck;
    if (questions && questions.length > 0) {
      clearLocalNotification().then(setLocalNotification);
      navigate("Quiz", {
        title: title
      });
    } else {
      Alert.alert(
        "Error!",
        "Add cards first, in order to start the quiz.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
  };
  render() {
    if (this.props.deck == null) return null;
    const { title, questions } = this.props.deck;
    const disabled = questions.length < 1;
    return (
      <View style={styles.containerBg}>
        <View style={styles.container}>
          <Text style={styles.deckTitle}>{title}</Text>
          <Text style={styles.deckCardsCount}>
            {questions.length} card{questions.length === 1 ? "" : "s"}
          </Text>
          <CardBtn onPress={this.onAddCard} />
          <QuizBtn onPress={this.onShowQuiz} disabled={disabled} />
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
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center"
  },
  deckTitle: {
    fontSize: 40,
    fontWeight: "800",
    color: white
  },
  deckCardsCount: {
    color: white,
    fontSize: 20,
    marginBottom: 40
  }
});
const mapStateToProps = ({ decks }, props) => {
  return { deck: getDeck(decks, props.navigation.state.params.title) };
};
export default connect(mapStateToProps)(ViewDeck);

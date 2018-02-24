import React, { Component } from "react";
import { AppLoading } from "expo";
import PropTypes from "prop-types";
import { purple, white, blue, gray, orange } from "../utils/colors";
import { getDeck } from "../utils/deckstorage";

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform
} from "react-native";

function QuizBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === "ios" ? styles.iosQuizBtn : styles.androidQuizBtn}
      onPress={onPress}
    >
      <Text style={styles.quizBtnText}>Start Quiz</Text>
    </TouchableOpacity>
  );
}

function CardBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === "ios" ? styles.iosCardBtn : styles.androidCardBtn}
      onPress={onPress}
    >
      <Text style={styles.cardBtnText}>Add Card</Text>
    </TouchableOpacity>
  );
}

export default class ViewDeck extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      deck: {}
    };
  }

  onAddCard = () => {
    
  };

  onShowQuiz = () => {
    
  };

  componentDidMount() {
    const { title } = this.props.navigation.state.params.deck;
    getDeck(title).then(deck => {
      if (deck) {
        this.setState({ deck: deck, ready: true });
      }
    });
  }
  render() {
    const { ready, deck } = this.state;
    if (ready === false) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.containerBg}>
          <View style={styles.container}>
            <Text style={styles.deckTitle}>{deck.title}</Text>
            <Text style={styles.deckCardsCount}>
              {deck.questions.length} card{deck.questions.length === 1
                ? ""
                : "s"}
            </Text>
            <CardBtn onPress={this.onAddCard} />
            <QuizBtn onPress={this.onShowQuiz} />
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
  },
  iosQuizBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20
  },
  androidQuizBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  quizBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  iosCardBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20
  },
  androidCardBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  cardBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

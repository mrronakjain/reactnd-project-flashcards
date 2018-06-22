import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { purple, white, blue } from "../utils/colors";

export default class DeckListItem extends React.Component {
  static propTypes = {
    deck: PropTypes.object.isRequired,
    goToDeck: PropTypes.func.isRequired
  };
  render() {
    const { deck, goToDeck } = this.props;
    const { title, questions } = deck;
    return (
      <TouchableOpacity style={styles.deckListItem} onPress={goToDeck}>
        <Text style={styles.deckListItemText}>{title}</Text>
        <Text style={styles.deckListItemCount}>
          {questions.length} card{questions.length === 1 ? "" : "s"}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  deckListItem: {
    padding: 10,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: Platform.OS === "ios" ? 7 : 2,
    alignItems: "center",
    marginBottom: 10
  },
  deckListItemText: {
    fontSize: 20,
    color: white
  },
  deckListItemCount: {
    color: white
  }
});

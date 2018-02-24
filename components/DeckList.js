import React, { Component } from "react";
import { AppLoading } from "expo";
import PropTypes from "prop-types";
import { purple, white, blue, gray, orange } from "../utils/colors";
import { getDecks } from "../utils/deckstorage";

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  FlatList
} from "react-native";

export default class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      decks: []
    };
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  componentWillUpdate() {
    getDecks().then(decks => {
      if (decks) {
        var decksWithKey = Object.values(decks).map(deck => ({
          ...deck,
          key: deck.title
        }));
        this.setState({ decks: decksWithKey, ready: true });
      }
    });
  }
  componentDidMount() {
    getDecks().then(decks => {
      if (decks) {
        var decksWithKey = Object.values(decks).map(deck => ({
          ...deck,
          key: deck.title
        }));
        this.setState({ decks: decksWithKey, ready: true });
      }
    });
  }
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.deckListItem}
        onPress={() =>
          this.props.navigation.navigate("ViewDeck", { deck: item })
        }
      >
        <Text style={styles.deckListItemText}>{item.title}</Text>
        <Text style={styles.deckListItemCount}>
          {item.questions.length} card{item.questions.length === 1 ? "" : "s"}
        </Text>
      </TouchableOpacity>
    );
  };
  render() {
    const { ready, decks } = this.state;
    if (ready === false) {
      return <AppLoading />;
    } else {
      return (
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          style={{ backgroundColor: blue }}
          contentContainerStyle={styles.container}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "stretch"
  },
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

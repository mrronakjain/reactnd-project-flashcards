import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { blue } from "../utils/colors";
import getDecks from "../state/selectors/decks/selector.getDecks";
import DeckListItem from "../components/DeckListItem";

import { StyleSheet, FlatList } from "react-native";

class DeckList extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  render() {
    const { decks, navigation } = this.props;
    const { navigate } = navigation;
    return (
      <FlatList
        data={decks}
        renderItem={({ item }) => {
          return (
            <DeckListItem
              deck={item}
              goToDeck={() => navigate("ViewDeck", { title: item.title })}
            />
          );
        }}
        style={{ backgroundColor: blue }}
        contentContainerStyle={styles.container}
      />
    );
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
  }
});

const mapStateToProps = ({ decks }) => ({ decks: getDecks(decks) });
export default connect(mapStateToProps)(DeckList);

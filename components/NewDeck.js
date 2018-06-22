import React, { Component } from "react";
import { Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { white, blue, gray, orange } from "../utils/colors";
import { connect } from "react-redux";
import { SubmitBtn } from "../components/buttons/NewDeck";
import createNewDeck from "../state/actions/decks/action.createNewDeck";
import getDeckIds from "../state/selectors/decks/selector.getDeckIds";

import { View, Text, TextInput, StyleSheet, Platform } from "react-native";

class NewDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  onChangeText = title => {
    this.setState({ title: title });
  };
  submit = () => {
    const { title } = this.state;
    if (title && title.trim() != "") {
      Keyboard.dismiss();
      this.setState({ title: "" }, () => {
        this.props.createNewDeck({ name: title });
        this.props.navigation.navigate("ViewDeck", { title: title });
      });
    }
  };
  render() {
    const deckExists = this.props.deckIds.includes(this.state.title);
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: blue }}
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.titleLabel}>
            What is the title of your new deck?
          </Text>
          <TextInput
            style={styles.titleTextInput}
            onChangeText={this.onChangeText}
            value={this.state.title}
            returnKeyType="done"
            placeholder="Deck title"
          />
        </View>
        {deckExists && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorLabel}>
              Deck with title{" "}
              <Text style={{ fontWeight: "800", fontStyle: "italic" }}>
                {this.state.title}
              </Text>{" "}
              already exists.
            </Text>
            <Text style={styles.errorLabel}>
              Please provide different title.
            </Text>
          </View>
        )}
        <SubmitBtn onPress={this.submit} disabled={deckExists} />
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

const mapStateToProps = ({ decks }) => ({ deckIds: getDeckIds(decks) });
export default connect(
  mapStateToProps,
  { createNewDeck }
)(NewDeck);

import React, { Component } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  purple,
  white,
  blue,
  gray,
  orange
} from "../utils/colors";
import { getDecks, saveDeckTitle } from "../utils/deckstorage";

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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", deckExists: false };
  }
  onChangeText = title => {
    this.setState({ title: title });
    if (title && title.trim() != "") {
      var deck = getDecks().then(results => {
        var deck = results === null ? results : JSON.parse(results)[title];
        if (deck) {
          this.setState({ deckExists: true });
        } else {
          this.setState({ deckExists: false });
        }
      });
    }
  };
  submit = () => {
    var title = this.state.title;
    if (title && title.trim() != "") {
      saveDeckTitle(title);
      this.setState({ title: "" });
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
          <Text style={styles.titleLabel}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.titleTextInput}
            onChangeText={this.onChangeText}
            value={this.state.title}
            returnKeyType="done"
            placeholder="Deck title"
          />
        </View>
        {this.state.deckExists && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorLabel}>
              Deck with title <Text style={{ fontWeight: "800", fontStyle: "italic" }}>
                {this.state.title}
              </Text> already exists.
            </Text>
            <Text style={styles.errorLabel}>Please provide different title.</Text>
          </View>
        )}
        <SubmitBtn onPress={this.submit} disabled={this.state.deckExists} />
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    borderRadius: 5,
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

import React, { Component } from "react";
import { StyleSheet, Platform, StatusBar, View } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { purple, white, blue } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Constants } from "expo";
import NewDeck from "./components/NewDeck";
import DeckList from "./components/DeckList";
import ViewDeck from "./components/ViewDeck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="book" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckList: {
    screen: DeckList,
    path: "decks",
    navigationOptions: () => ({
      title: `Decks`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    })
  },
  ViewDeck: {
    screen: ViewDeck,
    path: "decks/:title",
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    })
  },
  AddCard: {
    screen: AddCard,
    path: "decks/:title/addcard",
    navigationOptions: ({ navigation }) => ({
      title: "Add Card",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    })
  },
  Quiz: {
    screen: Quiz,
    path: "decks/:title/quiz",
    navigationOptions: ({ navigation }) => ({
      title: "Quiz",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    })
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

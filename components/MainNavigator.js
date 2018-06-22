import { StackNavigator } from "react-navigation";
import { purple, white } from "../utils/colors";
import DeckList from "./DeckList";
import Tabs from "./Tabs";
import ViewDeck from "./ViewDeck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";

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
export default MainNavigator;

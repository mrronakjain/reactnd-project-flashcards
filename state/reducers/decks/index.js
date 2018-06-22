import { CREATE_NEW_DECK, ADD_CARD_TO_DECK } from "../../actions/decks/types";
import addCardToDeck from "./reducer.addCardToDeck";
import createNewDeck from "./reducer.createNewDeck";

export default function decks(state = {}, action) {
  switch (action.type) {
    case CREATE_NEW_DECK:
      return createNewDeck(state, action);
    case ADD_CARD_TO_DECK:
      return addCardToDeck(state, action);
    default:
      return state;
  }
}

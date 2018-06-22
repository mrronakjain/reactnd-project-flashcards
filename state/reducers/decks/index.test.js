/* global describe, test, expect */
import deepFreeze from "deep-freeze";
import initialState from "./initial-state";
import decks from "./";
import { CREATE_NEW_DECK, ADD_CARD_TO_DECK } from "../../actions/decks/types";

describe("Deck reducer", () => {
  test("createNewDeck", () => {
    const state = deepFreeze({ ...initialState });
    const result = decks(state, {
      type: CREATE_NEW_DECK,
      payload: { name: "Test Deck" }
    });
    expect(result).toMatchSnapshot();
  });

  test("addCardToDeck", () => {
    const state = deepFreeze({ ...initialState });
    const result = decks(state, {
      type: ADD_CARD_TO_DECK,
      payload: {
        deckName: "React",
        card: {
          question: "question",
          answer: "answer"
        }
      }
    });
    expect(result).toMatchSnapshot();
  });
});

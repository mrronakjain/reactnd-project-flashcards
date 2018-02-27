import { AsyncStorage } from "react-native";

export const DECKS_STORAGE_KEY = "flashcards:decks";

export function getDeck(title) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    return results && JSON.parse(results)[title];
  });
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    return results && JSON.parse(results);
  });
}

export function saveDeckTitle(title) {
  var deck = { title: title, questions: [] };
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: deck
    })
  );
}

export function addCardToDeck(title, card) {
  return getDeck(title).then(deck => {
    if (deck) {
      deck.questions.push(card);
      return AsyncStorage.mergeItem(
        DECKS_STORAGE_KEY,
        JSON.stringify({
          [title]: deck
        })
      );
    } else {
      deck = {
        title: title,
        questions: [{ question: card.question, answer: card.answer }]
      };
      return AsyncStorage.mergeItem(
        DECKS_STORAGE_KEY,
        JSON.stringify({
          [title]: deck
        })
      );
    }
  });
}
